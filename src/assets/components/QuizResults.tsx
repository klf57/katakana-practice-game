/**
 * Component to show the results of the test
 * todo: provide the correct answer if incorrect 
 */


function QuizResults({ playerAnswers }) {



    return (
        <>

            <h2>Results</h2>



            {Array.from(playerAnswers.entries()).map(([key, value]) =>
                <>
                    {value ? <div className="card text-white bg-success mb-3 " key={key} >
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



        </>
    )


}


export default QuizResults;