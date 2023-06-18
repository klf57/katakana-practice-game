/**
 * Keyboard to display hiragana characters
 */
import HIRAGANA from "../constants/hiragana";
import "./keyboard-container.css";

function Keyboard() {


    //sends the hiragana or valued letter . 






    return (
        <>
            <div id="keyboard-container" className="btn-group btn-group-sm" role="group" aria-label="Small button group">

                {HIRAGANA.split("").map((value) => (

                    <button type="button" className="btn btn-outline-primary" value={value}>{value}</button>

                ))}

            </div>
        </>
    )


}


export default Keyboard;