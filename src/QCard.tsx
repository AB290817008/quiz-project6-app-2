import React from "react";

type Props = {
  question: string;
  answers: string[];
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
  callback: any;
};




const QCard: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNum,
  totalQuestions,
  callback,
}) => {
  return (
    <div>
      <p>
        Question : {questionNum}/{totalQuestions}
      </p>

      <div>
        {answers.map((answer) => {
          return (
            <div>
              <button></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QCard;
