using System.Text.RegularExpressions;

namespace Utils.Validations{
    static public class Validations {
        static public Regex userRegex = new Regex(@"^(?=.*[a-zA-Z])[a-zA-Z0-9]{5,20}$");
        static public Regex passwordRegex = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$");
        static public Regex emailRegex = new Regex(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    }

}
