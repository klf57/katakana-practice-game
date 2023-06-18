/**
 * Keyboard component to display hiragana characters 
 */
import HIRAGANA from "../constants/hiragana";
import "./keyboard-container.css";

function Keyboard({ handleButtonPush }) {



    return (
        <>
            <div id="keyboard-container" className="btn-group btn-group-sm" role="group" aria-label="Small button group">

                {HIRAGANA.split("").map((letter) => (

                    <button type="button" className="btn btn-outline-primary" key={letter} onClick={() => handleButtonPush(letter)}>{letter}</button>

                ))}

            </div>
        </>
    )


}


export default Keyboard;