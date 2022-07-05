import React from 'react';
import QuestionCard from './components/QuestionCard'

const App = () => {
  //To start Quiz
  const startTrivia = async () => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  }

  const nextQuestion = () => {
  }

  return (<div className="App">
    <h1>Quiz App</h1>
    <button className="start" onClick={startTrivia}>
      Start
    </button>
    <p className=" score">Score:</p>
    <p>Loading Questions ...</p>
    <QuestionCard />
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
  </div>
  );
}

export default App;
