/**
 * Component to show the results of the test
 * todo: provide the correct answer if incorrect 
 */


function QuizResults({ playerAnswers }) {







    return (
        <>

            <h2>Results</h2>



            {Array.from(playerAnswers.entries()).map(([key, was_correct]) =>
                <>
                    {was_correct ? <div className="card text-white bg-success mb-3 " key={key} >
                        <div className="card-body">
                            <h1> {key}</h1>
                            <p>correct</p>
                        </div>
                    </div>
                        : <div className="card" key={key} >
                            <div className="card-body">
                                <h1> {key}</h1>
                                <p>incorrect</p>
                            </div>
                        </div>


                    }
                </>


            )}



            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => window.location.reload(false)}>Restart Quiz</button>




        </>
    )


}


export default QuizResults;