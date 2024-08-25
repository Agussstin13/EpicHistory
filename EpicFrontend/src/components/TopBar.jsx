import Button from "../components/Button.jsx";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SessionContext } from '../App.js';

export default function TopBar(props) {
  const [classes, setClasses] = useState(true);
  const navigate = useNavigate();
  const [session, setSession] = useContext(SessionContext);
  function displayMenu(){
    setClasses(!classes);
  }

  function LogOut(){
    localStorage.removeItem("session");
    setSession(false);
    navigate("/Login", true);
    window.location.reload();
  }

return (
  <>
    <nav id="navToToggle" style={{height: "45px"}} className={classes ? "navbar navbar-dark bg-dark flex-nowrap sticky-top" : "navbar flex-nowrap position-absolute"}>
      <div className="container-fluid">
        <Button className="navbar-toggler" content={<span className="navbar-toggler-icon"></span>} event={displayMenu}/>
        <div className={classes ? "d-flex" : "invisible"}>
          {JSON.parse(localStorage.getItem("session")).data.user}
        </div>
        <div className={classes ? "d-flex" : "invisible"}>
          <button className="btn btn-dark" onClick={() => {navigate("./Home", true)}} style={{marginLeft: "4px"}}>
            Home
          </button> 
          <button className="btn btn-dark" onClick={() => {navigate("./Chapter1", true)}} style={{marginLeft: "4px"}}>
            Play
          </button> 
          <button className="btn btn-dark" onClick={() => LogOut()} style={{marginLeft: "4px"}}>
            Log Out
          </button> 
        </div>
      </div>
    </nav>
    <Outlet />
  </>
  );
}
