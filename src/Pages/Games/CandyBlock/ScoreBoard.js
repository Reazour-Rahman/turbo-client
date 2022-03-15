const ScoreBoard = ({ score }) => {
  let theme;
  theme = localStorage.getItem("theme")
    return (
      <div className="score-board" id={ theme === "light" ? "black" : "darkLight" }>
        Your score is : 
        <h2>{score}</h2>
      </div>
    )
  }
  
  export default ScoreBoard;