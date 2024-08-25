import { useEffect, useState } from "react";
import "../../assets/css/Dialog.css";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const [loaded, setLoaded] = useState("lore");
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{
    setTimeout(() => setLoaded("lore lore2"), 2000);
  },[]);

  function Continue(){
    setLoaded("blackscreen");
    setHide(true);
    setTimeout(() => navigate("/Login", true), 6000);
  }
  
  return (
      <div className="body" style={{ justifyContent: "center", display: "flex"}}>
        <div className={loaded}>
          <p>
            This story takes place in the lands of a society that is not yet very advanced, with a world that still offers much to discover. 
            Goblins, spells and druids are just a small example of what dwell this place.
            Once, these lands were bathed in the golden light of peace(or an attempt for peace),
            the people of this world, though not mighty in their knowledge of the arcane or the arts of war,
            lived in harmony with the wilds.
            But for a couple of years now, hostile creatures have increased in number. 
            Began to emerge from the depths of the dark forests—forests that now seemed to spread like a growing blight across the land.
            The once peaceful nights are now filled with the distant howls of unknown beasts and the flickering lights of far-off fires, hinting at the battles fought in the shadows.
            The dark forests are occupying more and more land, and are getting closer to the human population, 
            which is why they were forced to increase their ranks.
            The dark forces are claiming more and more land and humanity is increasingly threatened.
            This is where your story begins, in the city of Northwind, where you study the arts of defense, accompanied by a small group, and some friends... 
            They are a group of adventurers with ambitions and a desire to explore, learn, and... maybe smash and loot a couple of creatures.
            The way is in front of you is long and very difficult, where danger lurks at every turn,
            you will have to adapt to those different situations and fight with all your hearth to defeat the evil.
            You will face challenges that will test your resolve, battles that will push you to your limits,
            and choices that will shape the fate of this world. The fate of Northwind, and perhaps the entire realm, will rest in your hands.
          </p>
          <Button event={() => Continue()} styles={hide ? {display: "none"} : {}} content="Continue"/>
        </div>
      </div>
  );
}
