using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using EpicBackend.Models;
using EpicBackend.Utils;
using EpicBackend.Data;
using EpicBackend.Responses;
using System.Net;

namespace EpicBackend.Controllers
{
    [AllowAnonymous]
    [ApiController]

    public class LogInController : ControllerBase
    {
        private readonly EpicContext epicContext;
        private readonly Jwt jwt;

        public LogInController(EpicContext epicContext, Jwt jwt)
        {
            this.epicContext = epicContext;
            this.jwt = jwt;
        }

        [HttpPost]
        [Route("LogIn")]
        public async Task<BaseResponse> LogIn(LoginDTO login)
        {
            try
            {
                login.password = jwt.encryptSHA256(login.password);
                var rsp = await epicContext.users.Where(usersTable => (usersTable.email == login.userOrEmail && usersTable.password == login.password) || (usersTable.user == login.userOrEmail && usersTable.password == login.password)).FirstOrDefaultAsync();
                if (rsp == null)
                {
                    return new BaseResponse("The user, email or password is incorrect, please try again.", (int)HttpStatusCode.Unauthorized, true);
                }
                else
                {
                    SessionResponse session = new SessionResponse(rsp.id, rsp.user, rsp.type, jwt.generarJWT(rsp));
                    return new DataResponse<SessionResponse>("Log in successfull", (int)HttpStatusCode.OK, false, session);
                }
            }
            catch
            {
                return new BaseResponse("Could not connect to the database, please contact with an administrator", (int)HttpStatusCode.InternalServerError, true);
            }
        }
    }
}
