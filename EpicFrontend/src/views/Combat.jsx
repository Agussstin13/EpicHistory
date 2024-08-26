import { useContext } from "react";
import { SessionContext } from "../App";
import "../assets/css/Combat.css";
import { CombatHeroFrame } from "../components/CombatHeroFrame";
import HeroImage from "../assets/images/Druid.jpg";
import HeroImage2 from "../assets/images/Warrior.jpg";

export default function Combat(props) {
  const [session, setSession] = useContext(SessionContext);
  return (
    <div className="combatcontainer">
      <div className="enemyFrame">
        <CombatHeroFrame heroImage={{ backgroundImage: `url(${HeroImage})` }} />
      </div>
      <div className="HeroFrame">
        <CombatHeroFrame heroImage={{ backgroundImage: `url(${HeroImage2})` }} />
      </div>
    </div>
  );
}
