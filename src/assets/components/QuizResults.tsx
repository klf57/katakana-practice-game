/**
 * Component to show the results of the test
 */


function QuizResults({ playerAnswers }) {



    return (
        <>

            <h2>Results</h2>



            {Array.from(playerAnswers.entries()).map(([key, value]) =>
                <>
                    <div className="card" key={key}>
                        <div className="card-body">
                            <h1> {key}</h1>
                            <p>{value ? "correct" : "incorrect"}</p>
                        </div>
                    </div>
                </>


            )}



        </>
    )


}


export default QuizResults;