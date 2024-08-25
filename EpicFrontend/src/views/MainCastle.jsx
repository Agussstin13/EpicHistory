import "../assets/css/MainCastle.css";
import TextBubble from "../components/TextBubble.jsx";
import { useNavigate, useOutlet } from "react-router-dom";

export const MainCastle = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <>
    {outlet ||
      <div className="MainCastle">
        <TextBubble text="Taberna" redirect={() => {navigate("/MainCastle/Taberna", true)}} positionX="71vw" positionY="25vh"/>
        <TextBubble text="Monasterio" redirect={() => {navigate("/MainCastle/Monasterio", true)}} positionX="13vw" positionY="83vh" />
        <TextBubble text="herrero" positionX="85vw" positionY="84vh" />
        <TextBubble text="castillo" positionX="46vw" positionY="68vh" />
        <TextBubble text="barracones" positionX="36vw" positionY="58vh" />
      </div>
    }
    </>
  );
};

export default MainCastle;
