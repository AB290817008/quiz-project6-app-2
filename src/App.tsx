import React,{useState} from 'react';
import './App.css';
import QCard from './QCard';
import {fetchApi} from './Api'
import {Difficulty} from './Api'
import {QuestionsState} from'./Api'


export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {

  const [score,setScore] = useState(0);
  const [loading,setLoading] = useState(false);
  const [gameOver,setGameOver] = useState(true);
  const [questions,setQuestions] = useState([]);
  const [userAnswers,setUserAnswers] = useState([]);
  const [number,setNumber] = useState(0);
  

  

  const TOTAL_QUESTIONS:number = 10;

  console.log(fetchApi(TOTAL_QUESTIONS,Difficulty.EASY));
  
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchApi(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };


  const nextQuestion = () => {
    
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };


  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };


  
  
  return (
   <div>
     <h1>Quiz 1</h1>
     <button>Start Quiz</button>
      <p>Score</p>
      
      <p>Loading</p>
      
        {/* <QCard 
          question= {number + 1}
          answers=
          userAnswer= 
          questionNum= 
          totalQuestions= 
          callback=

        /> */}

      <button>Next Question</button>
    </div>
  );
}

export default App;
