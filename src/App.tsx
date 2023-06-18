import { useState } from "react";
import "./App.css";
import QuizCards from "./assets/components/QuizCards";
import HIRAGANA from "./assets/constants/hiragana";
import KATAKANA from "./assets/constants/katakana";

function App() {
  //toggles between different components.
  let [GameIsDone, setEndGame] = useState(false);

  let [playerAnswers, addAnswer] = useState(new Map());
  const [progressCount, setCount] = useState(0);

  //toggles from false to true or vice versa.
  const updateGameState = () => {
    setEndGame(!GameIsDone);
  };

  //Prepare answerSheet 
  let answer_sheet = new Map(); // tracks hiragana and katakana
  for (let i = 0; i < HIRAGANA.length; i++) {


    //because of the way the texts are arranged, it Adds the katakana that matches the hiragana together as a dictionary entry.
    answer_sheet.set(
      KATAKANA.charAt(i).toString(),
      HIRAGANA.charAt(i).toString()
    );
  }


  //process the player's answer
  const handleAnswer = (current_question: String, response: String) => {

    // if player did not put anything in, it will evaluate as false.
    let is_correct = answer_sheet.get(current_question) === response;

    addAnswer(playerAnswers.set(current_question, is_correct));
    console.log(playerAnswers);

  }



  return (
    <>
      <h1>Katakana Quiz</h1>
      <QuizCards updateGameState={updateGameState} handleAnswer={handleAnswer} />

      <p>Enter the hiragana character that sounds like the katakana! </p>
      <p>Questions answered: {progressCount} / {KATAKANA.length}</p>

    </>
  );
}

export default App;
