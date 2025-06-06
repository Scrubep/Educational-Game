import { useState } from 'react';
import './RiddleGame.css';

// Riddle game where user has to answer a few brain teasers.
const riddles = [
    {
    question: "I’m full of keys but I can’t open doors. What am I?",
    options: ["Piano", "Map", "Book", "Treasure Chest"],
    answer: "Piano",
  },
  {
    question: "What has hands but can't clap?",
    options: ["Monkey", "Clock", "Shadow", "Glove"],
    answer: "Clock",
  },
  {
    question: "What building has the most stories?",
    options: ["Skyscraper", "Tower", "Mansion", "Library"],
    answer: "Library",
  },

  {
    question: "What has legs, but doesn't walk?",
    options: ["Table", "Dog", "Fish", "Aliens"],
    answer: "Table",
  },

  {
    question: "What can you catch, but not throw?",
    options: ["Frisbee", "Football", "Cold", "Ice Cream"],
    answer: "Cold",
  },
];

function RiddleGame({ onComplete }) {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [feedback, setFeedback] = useState('');

    const currentRiddle = riddles[current];

    const handleSelect = (option) => {
        setSelected(option);
        const isCorrect = option === currentRiddle.answer;
        setFeedback(isCorrect ? 'Correct!' : 'Try again!');
    };

    const handleNext = () => {
        if (current + 1 < riddles.length && feedback === 'Correct!') {
            setCurrent(current + 1);
            setSelected(null);
            setFeedback('');
        }
        else if (current + 1 === riddles.length) {
            onComplete();
        }
    };

    return (
    <div className="riddle-game">
      <p>{currentRiddle.question}</p>
      <div className="options">
        {currentRiddle.options.map((option) => (
          <button
            key={option}
            className={`option-btn ${selected === option ? "selected" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
      {feedback === 'Correct!' && (
        <button className="next-btn" onClick={handleNext}>
          {current + 1 === riddles.length ? "Finish Quiz" : "Next Riddle"}
        </button>
      )}
    </div>
  );
}

export default RiddleGame;