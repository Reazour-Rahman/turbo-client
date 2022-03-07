const ScoreBoard = ({ score }) => {
    return (
      <div className="score-board">
        Your score is : 
        <h2>{score}</h2>
      </div>
    )
  }
  
  export default ScoreBoard;