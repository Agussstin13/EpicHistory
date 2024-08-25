using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using EpicBackend.Models;
using EpicBackend.Utils;
using EpicBackend.Data;
using EpicBackend.Responses;
using System.Net;
using Utils.Validations;

namespace EpicBackend.Controllers
{
    [AllowAnonymous]
    [ApiController]

    public class SignInController : ControllerBase
    {
        private readonly EpicContext epicContext;
        private readonly Jwt jwt;

        public SignInController(EpicContext epicContext, Jwt jwt)
        {
            this.epicContext = epicContext;
            this.jwt = jwt;
        }

        [HttpPost]
        [Route("SignIn")]
        public async Task<BaseResponse> SingIn([FromBody] Users user)
        {
            try
            {
                if (!Validations.userRegex.IsMatch(user.user))
                {
                    return new BaseResponse("username must have at least 5 characters and one letter. Maximum 20 characters", (int)HttpStatusCode.BadRequest, true);
                }
                else if (!Validations.passwordRegex.IsMatch(user.password))
                {
                    return new BaseResponse("invalid password, must have at least 8 characters, one uppercase letter, one lowercase letter and one number", (int)HttpStatusCode.BadRequest, true);
                }
                else if (!Validations.emailRegex.IsMatch(user.email))
                {
                    return new BaseResponse("invalid email", (int)HttpStatusCode.BadRequest, true);
                }
            }
            catch
            {
                return new BaseResponse("Validation Failed", (int)HttpStatusCode.BadRequest, true);
            }
            try
            {
                var rsp = await epicContext.users.Where(usersTable => usersTable.email == user.email || usersTable.user == user.user).FirstOrDefaultAsync();
                if (rsp == null)
                {
                    user.password = jwt.encryptSHA256(user.password);
                    var userModel = new Users(user.user, user.password, user.email);
                    await epicContext.users.AddAsync(userModel); //Users {id: 12} Unchanged"
                    int rsp2 = await epicContext.SaveChangesAsync();
                    if (rsp2 == 0)
                    {
                        return new BaseResponse("The user could not be created", (int)HttpStatusCode.OK, true);
                    }
                    else
                    {
                        return new BaseResponse("The user has been created successfully", (int)HttpStatusCode.OK, false);
                    }
                }
                else
                {
                    return new BaseResponse("The user name or email is already taken", (int)HttpStatusCode.Conflict, true);
                }
            }
            catch (DbUpdateException)
            {
                return new BaseResponse("No se pudo verificar la unicidad, reintente mas tarde", (int)HttpStatusCode.InternalServerError, true);
            }
            catch
            {
                return new BaseResponse("Could not create the user, please try again later", (int)HttpStatusCode.InternalServerError, true);
            }
        }
    }
}
