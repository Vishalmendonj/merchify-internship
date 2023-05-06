import React, { useState, useEffect } from 'react';

function Quiz() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest country in the world by land area?',
      options: ['China', 'Russia', 'USA', 'Canada'],
      answer: 'Russia',
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yuan', 'Yen', 'Euro', 'Dollar'],
      answer: 'Yen',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !quizCompleted) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !quizCompleted) {
      setQuizCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizCompleted]);

  const score = ((correctAnswers / questions.length) * 100).toFixed(2);
  const minutes = Math.floor((60 - timeLeft) / 60);
  const seconds = (60 - timeLeft) % 60;
  const timeTaken = `${minutes} min ${seconds} sec`;

  return (
    <div>
      {quizCompleted ? (
        <div>
          Quiz complete! <br /> You got {correctAnswers} out of {questions.length} correct.
          <br />
          Your score: {score}%.
          <br />
          Time taken: {timeTaken}.
        </div>
      ) : (
        <div>
          <div>Time left: {timeLeft} seconds</div>
          <form onSubmit={handleSubmit}>
            <h3>{questions[currentQuestionIndex].question}</h3>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Quiz;
