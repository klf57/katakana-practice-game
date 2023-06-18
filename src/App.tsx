import { useState } from "react";
import "./App.css";
import QuizCards from "./assets/components/QuizCards";
import HIRAGANA from "./assets/constants/hiragana";
import KATAKANA from "./assets/constants/katakana";
import QuizResults from "./assets/components/QuizResults";


function App() {
  //toggles between different components.
  let [GameIsDone, setEndGame] = useState(false);

  let [playerAnswers, addAnswer] = useState(new Map());
  const [progressCount, setCount] = useState(0);

  let is_correct = true;

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

  /**
   * Processes the player's answer and checks if it is correct. Also increments the progress Counter by +1 
   * @param current_question the question currently shown to the player
   * @param response The answer the player entered 
   */
  const handleAnswer = (current_question: String, response: String) => {

    // if player did not put anything in, it will evaluate as false.
    is_correct = answer_sheet.get(current_question) === response ? true : false;

    addAnswer(playerAnswers.set(current_question, is_correct));
    setCount(progressCount + 1);
    console.log(playerAnswers); //FOR TESTING



  }


  //GameIsDone boolean will toggle which component to show to player.
  return (
    <>


      <h1>Katakana Quiz</h1>

      <div id="main-container" className="scrollable-content">

        {!GameIsDone && <>
          <QuizCards updateGameState={updateGameState} handleAnswer={handleAnswer} />



        </>


        }

        {GameIsDone && <>

          <QuizResults playerAnswers={playerAnswers} />

        </>}


      </div>

    </>
  );
}

export default App;
