namespace EpicBackend.Models
{
    public class Users
    {
        public int id { get; set; }
        public short type { get; set; }
        public string user { get; set; }
        public string password { get; set; }
        public string email { get; set; }

        public Users(string user, string password, string email){
            this.user = user;
            this.password = password;
            this.email = email;
        }
    }
}
