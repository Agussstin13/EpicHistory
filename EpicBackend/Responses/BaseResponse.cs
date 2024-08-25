namespace EpicBackend.Responses
{
    public class BaseResponse
    {
        public string message { get; set; }
        public int StatusCode { get; set; }
        public bool error { get; set; }
        public BaseResponse(string message, int StatusCode, bool error)
        {
            this.message = message;
            this.StatusCode = StatusCode;
            this.error = error;
        }
    }
    public class DataResponse<T> : BaseResponse
    {
        public T data { get; set; }
        public DataResponse(string message, int StatusCode, bool error, T data) : base(message, StatusCode, error)
        {
            this.message = message;
            this.StatusCode = StatusCode;
            this.error = error;
            this.data = data;
        }
    }
}