import { useState } from "react";
import Keyboard from "./Keyboard";
import KATAKANA from "../constants/katakana";

interface Props {
  //what types are these functions ?
  updateGameState;
  handleAnswer;
}

function QuizCards({ handleAnswer, updateGameState }: Props) {


  //makes an array
  let something = KATAKANA.split("");

  //variables for making questions appear one at a time.
  let [progressCount, setProgress] = useState(0);



  const next_question = (event) => {
    //stops component triggering refresh whenever enter key is pressed.
    event.preventDefault();

    if (event.key === "Enter") {

      let current_question = something[progressCount];

      //tells the parent component that the player has given an answer to a question.
      handleAnswer(current_question, document.getElementById("userAnswer").value);

      //have to manually tell input-tag to clear out user's entered password.
      document.getElementById("userAnswer").value = "";

      setProgress(progressCount + 1);

      //checks if all questions have been answered 
      if (progressCount == something.length - 1) {

        updateGameState();

      }
    }

  };


  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h1> {something[progressCount]}</h1>

          <form
            onKeyDown={
              //need to place onKeyDown in a form tag. Enter key isn't detected inside the input tag.
              //if its just next_question() nothing appears in the input box
              (event) =>
                event.key === "Enter"
                  ? next_question(event)
                  : console.log("not triggered")
            }
          >
            <input type="text" id="userAnswer" />
          </form>


        </div>
      </div>

      <p>Enter the hiragana character that sounds like the katakana! type it in or use the keyboard <br />
        Questions answered: {progressCount} / {something.length}</p>
      <Keyboard />
    </>
  );
}

export default QuizCards;
