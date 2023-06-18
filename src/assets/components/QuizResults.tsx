/**
 * Component to show the results of the test
 */


function QuizResults({ playerAnswers }) {


    console.log("hi");
    console.log(playerAnswers)


    return (
        <>

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