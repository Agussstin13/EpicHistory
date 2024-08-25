namespace EpicBackend.Models
{
    public class LoginDTO
    {
        public string userOrEmail { get; set; }
        public string password { get; set; }

        public LoginDTO(string userOrEmail, string password)
        {
            this.userOrEmail = userOrEmail;
            this.password = password;
        }
        
    }


}