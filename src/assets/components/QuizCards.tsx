import { useState } from "react";
import KATAKANA from "../constants/katakana";

interface Props {
  //what types are these functions ?
  updateGameState;
  handleAnswer;
}

function QuizCards({ handleAnswer }: Props) {


  //makes an array
  let something = KATAKANA.split("");

  //variables for making questions appear one at a time.
  let [current_index, setIndex] = useState(0);



  const next_question = (event) => {
    //stops component triggering refresh whenever enter key is pressed.
    event.preventDefault();

    if (event.key === "Enter") {

      let current_question = something[current_index];

      //tells the parent component that the player has given an answer to a question.
      handleAnswer(current_question, document.getElementById("userAnswer").value);

      //have to manually tell input-tag to clear out user's entered password.
      document.getElementById("userAnswer").value = "";

      setIndex(current_index + 1);
    }

  };


  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h1> {something[current_index]}</h1>

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
    </>
  );
}

export default QuizCards;
