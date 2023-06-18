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
  let katakana_list = KATAKANA.split("");

  //variables for making questions appear one at a time.
  let [progressCount, setProgress] = useState(0);

  let current_question = '';



  const handle_input = (event) => {
    //stops component triggering refresh whenever enter key is pressed.
    event.preventDefault();

    if (event.key === "Enter") {



      next_question(document.getElementById("userAnswer").value);




    }

  };


  const handle_button_pushed = () => {
    console.log('button pushed.');

    current_question = "katakana_list ";
  }


  /*
  PREPARES NEXT QUESTION
  */
  const next_question = (current_answer: String) => {


    //tells the parent component that the player has given an answer to a question.
    current_question = katakana_list[progressCount];
    handleAnswer(current_question, current_answer);

    //have to manually tell input-tag to clear out user's entered password.
    document.getElementById("userAnswer").value = "";

    setProgress(progressCount + 1);

    //checks if all questions have been answered 
    if (progressCount == katakana_list.length - 1) {

      updateGameState();

    }
  }


  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h1> {katakana_list[progressCount]}</h1>

          <form
            onKeyDown={
              //need to place onKeyDown in a form tag. Enter key isn't detected inside the input tag.
              //if its just handle_input() nothing appears in the input box
              (event) =>
                event.key === "Enter"
                  ? handle_input(event)
                  : console.log("not triggered")
            }
          >
            <input type="text" id="userAnswer" />
          </form>


        </div>
      </div>

      <p>Enter the hiragana character that sounds like the katakana! type it in or use the keyboard <br />
        Questions answered: {progressCount} / {katakana_list.length}</p>
      <Keyboard />
    </>
  );
}

export default QuizCards;
