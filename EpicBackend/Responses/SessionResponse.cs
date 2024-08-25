namespace EpicBackend.Responses
{
    public class SessionResponse
    {
        public int id { get; set; }
        public string user { get; set; }
        public int type { get; set; }
        public string token { get; set; }
        public SessionResponse(int id, string user, int type, string token)
        {
            this.id = id;
            this.user = user;
            this.type = type;
            this.token = token;
        }
    }
}