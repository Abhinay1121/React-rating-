import React, { useState } from 'react';

import Thankyou from './Thankyou';

import './style.css';

export default function App() {
  const numberArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(undefined);
  const [showComponent, setShowComponent] = useState(true);
  const handleRatingClicked = (num, i) => {
    setRating(num);
  };

  const handleRatingSubmit = (e) => {
    // e.preventDefault();
    setShowComponent(false);
  };
  const handleBackClicked = () => {
    setShowComponent(true);
  };
  return (
    <div className="App">
      {showComponent ? (
        <div className="container">
          <div className="star">&#9734;</div>
          <div>How did we do ?</div>
          <p>
            Please let us know how we did with your support request.All feedback
            is appreciated to help u improve our offering!
          </p>
          <div className="numbers">
            {numberArray.map((num, i) => (
              <button
                key={num}
                onClick={() => handleRatingClicked(num)}
                className="number"
              >
                {num}
              </button>
            ))}
          </div>
          <button type="submit" onClick={handleRatingSubmit} className="button">
            Submit
          </button>
        </div>
      ) : (
        <Thankyou
          rateArray={numberArray}
          rating={rating}
          handleBackClicked={handleBackClicked}
        />
      )}
    </div>
  );
}
