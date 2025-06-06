import { useState } from 'react';
import './MathGame.css';

// A game to help students with learning math,
function MathGame({ onComplete }) {
  const problems = [
    {
      id: 0,
      question: "If you have 2 apples and buy 3 more, how many do you have?",
      answer: 5,
    },
    {
      id: 1,
      question: "There are 8 slices of pizza. How many are left after you eat half?",
      answer: 4,
    },
    {
      id: 2,
      question: "You see 9 birds, 3 fly away. How many are left?",
      answer: 6,
    },
    {
      id: 3,
      question: "I have 5 fingers on one hand. How many do I have on both?",
      answer: 10,
    },
  ];

  const [inputs, setInputs] = useState(Array(problems.length).fill(""));
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const checkAnswers = () => {
    const allCorrect = problems.every((p, i) => parseInt(inputs[i]) === p.answer);
    setIsCorrect(allCorrect);
    if (allCorrect) onComplete();
  };

  return (
    <div className="math-game">
      <h2>Solve to Unlock the Launch Code</h2>
      {problems.map((problem, i) => (
        <div key={problem.id} className="problem">
          <p>{problem.question}</p>
          <input
            type="number"
            value={inputs[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}

      <button onClick={checkAnswers}>Submit</button>

      {isCorrect !== null && (
        <div className={`status-message ${isCorrect ? 'success' : 'fail'}`}>
          {isCorrect
            ? `✅ Correct! Launch code: ${inputs.join("")}`
            : "🔒 Incorrect sequence. Try again."}
        </div>
      )}
    </div>
  );
}

export default MathGame;