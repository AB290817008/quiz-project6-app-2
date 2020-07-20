import { shuffleArray } from './Utils'

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchApi = async(amount:number ,difficulty:Difficulty) => {




   
    
    const url =
            "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
          const data = await (await fetch(url)).json();
          console.log(data);        
            return data.results.map((question:Question) => ({
               ...question,
               answers: shuffleArray([...question.incorrect_answers, question.correct_answer])



            }))
}







//   useEffect(() => {
//     async function fetchApi() {
//       const url =
//         "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
//       const data = await axios.get(url);
//       console.log(data)
//     }
//     fetchApi();
//   });

