import { BrowserRouter, Routes, Route } from "react-router-dom";
import DruidDeck from "./views/DruidDeck";
import MageDeck from "./views/MageDeck";
import WarriorDeck from "./views/WarriorDeck";
import MainCastle from "./views/MainCastle";
import TextBubble from "./components/TextBubble.jsx";
import Tavern from "./views/Tabernero.jsx";
import { createContext, useEffect, useState } from "react";
import LogIn from "./views/LogIn.jsx";
import "./assets/css/Background.css";
import TopBar from "./components/TopBar.jsx";
import './assets/css/Background.css'
import './assets/css/MainCastle.css'
import Introduction from "./views/Chapter1/Introduction.jsx";
import Chapter1 from "./views/Chapter1/Chapter1.Routes.jsx";

export const SessionContext = createContext();

function App() {

  const [session, setSession] = useState(false);
  useEffect(() => {
    setSession(localStorage.getItem("session"));
  }, []);

  return (
    <>
      <SessionContext.Provider value={[session, setSession]}>
        <BrowserRouter>
          <Routes>
            { session ?
                <>
                  <Route path="/*" element={<TopBar />} >
                      <Route path="DruidCards" element={<DruidDeck />}/>
                      <Route path="MageCards" element={<MageDeck />}/>
                      <Route path="Chapter1">
                        {Chapter1()}
                      </Route>
                      <Route path="WarriorCards" element={<WarriorDeck />}/>
                      <Route path="MainCastle" element={<MainCastle />}>
                        <Route path="Taberna" element={<Tavern/>}/>
                        <Route path="Monasterio" element={<TextBubble text="Monasterio" positionX="13vw" positionY="83vh"/>}/>
                        <Route path="Herrero" element={<TextBubble text="Herrero" positionX="85vw" positionY="84vh" />}/>
                        <Route path="Castillo" element={<TextBubble text="Castillo" positionX="46vw" positionY="68vh" />}/>
                        <Route path="Barracones" element={<TextBubble text="Barracones" positionX="36vw" positionY="58vh" />} />
                      </Route>
                  </Route>
                </>
              : 
              <>
                <Route path="/*" element={<LogIn />}/>
                <Route path="/login" element={<LogIn />}/>
              </>
            }
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </>
  );
}

export default App;
