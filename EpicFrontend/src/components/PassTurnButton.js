import { useState } from "react";

export default function PassTurnButton (){
    const [passTurn, usePassTurn] = useState(true);

    function PassTurnButton () {
        usePassTurn(!passTurn);
        const GetPassTurnButton = document.getElementById("PassTurnButton");
        GetPassTurnButton.disabled = passTurn;
        cd = cd-1;
    }

    return(
        <button id="PassTurnButton" onClick={PassTurnButton}>
            <h2>Pasar turno</h2>    
        </button>
    );

}
