namespace EpicBackend.Models
{
    public class NewUsers
    {
        public string user { get; set; }
        public string password { get; set; }
        public string email { get; set; }

        public NewUsers(string user, string password, string email){
            this.user = user;
            this.password = password;
            this.email = email;
        }
    }
}