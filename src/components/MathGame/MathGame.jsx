import { useState } from 'react';

const problems = [
  {
    id: 0,
    question: "If you have 2 apples and buy 3 more, how many do you have?",
    answer: 5,
  },
  {
    id: 1,
    question: "What is 10 divided by 2?",
    answer: 5,
  },
  {
    id: 2,
    question: "You see 8 birds, 3 fly away. How many are left?",
    answer: 5,
  },
  {
    id: 3,
    question: "What is 2 multiplied by 2?",
    answer: 4,
  },
];

function MathGame({ onComplete }) {
  const [inputs, setInputs] = useState(Array(problems.length).fill(""));
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const checkAnswers = () => {
    const allCorrect = problems.every((p, i) => parseInt(inputs[i]) === p.answer);
    setIsCorrect(allCorrect);

    if (allCorrect) {
      onComplete();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧠 Solve the word problems to unlock the 4-digit password</h2>
      {problems.map((problem, i) => (
        <div key={problem.id} style={{ marginBottom: 10 }}>
          <p>{problem.question}</p>
          <input
            type="number"
            value={inputs[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            style={{ width: 60 }}
          />
        </div>
      ))}

      <button onClick={checkAnswers}>Submit</button>

      {isCorrect ? (
        <h3 style={{ color: "green" }}>✅ Correct! The password is {inputs.join("")}</h3>
      ) : (
        <p>🔒 Enter the correct answers to unlock the password.</p>
      )}
    </div>
  );
}

export default MathGame;