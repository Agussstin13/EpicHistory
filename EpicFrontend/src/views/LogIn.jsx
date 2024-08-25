import { useContext, useState } from "react";
import "../assets/css/LogIn.css";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import Post from "../Controllers/Post.js";
import { Spinner } from 'reactstrap'
import { OkeyModal } from "../components/Modals/OkeyModal.jsx";
import { SessionContext } from "../App.js";

export default function LogIn(props) {
  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [session, setSession] = useContext(SessionContext);

  function checkLogIn() {
    setLoading(true);
    Post("LogIn", {
        userOrEmail: user,
        password: password
    }).then((rsp) => {
      if(rsp === undefined){
        setMessage("Can not connect to the server");
        setModal(true);
        setLoading(false);
      }else if(rsp.error === true){
        setMessage(rsp.message);
        setModal(true);
        setLoading(false);
      }else{
        delete rsp.message;
        delete rsp.statusCode;
        delete rsp.error;
        setSession(rsp);    
        localStorage.setItem("session", JSON.stringify(rsp));
      }
    });
  }


  function modalClick() {
    setModal(false);
    setMessage("");
  }

  return (
    <div className="loginbody">
      <form onSubmit={() => checkLogIn()} className="formbody">
        <div className="form">
          <label htmlFor="user">Username</label>
          <Input style={{width: "300px", height: "25px"}} type="text" setData={setUser} placeholder="ELDERWIZARD999" />
          <label htmlFor="password">Password</label>
          <Input style={{width: "300px", height: "25px"}} type="password" setData={setpassword} placeholder="*********" />
          {
            loading ? 
            <Spinner color="success"/>
            :
            <Button content="Log In" className="button" event={checkLogIn} />
          }
        </div>
      </form>
      {
        modal && <OkeyModal event={modalClick} title={"Log In"} text={message}/>
      }
    </div>
  );
}
