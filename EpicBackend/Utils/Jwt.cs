using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using EpicBackend.Models;

namespace EpicBackend.Utils{
    public class Jwt{
        private readonly IConfiguration configuration;
        public Jwt(IConfiguration configuration){
            this.configuration = configuration;
        }

        public string encryptSHA256(string text){
            using(SHA256 sha256Hash = SHA256.Create()){
                Console.WriteLine(text);
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(text));
                Console.WriteLine(text);
                StringBuilder builder = new StringBuilder();
                for(int i=0;i<bytes.Length;i++){
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        public string generarJWT(Users user){
            //informacion del usuario para el token
            var userClaims = new[]{
                new Claim(ClaimTypes.NameIdentifier, user.id.ToString()),
                new Claim(ClaimTypes.Email, user.email),
                new Claim(ClaimTypes.Name, user.user)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            //crear detalle del token
            var jwtConfig = new JwtSecurityToken(
                claims: userClaims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(jwtConfig);
        }

    }
}
