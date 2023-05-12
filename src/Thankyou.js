import React, { useState } from 'react';
import './style.css';

export default function Thankyou({ rating, rateArray, handleBackClicked }) {
  // const numberArray = [1, 2, 3, 4, 5];
  // const [rating, setRating] = useState(undefined);
  // const handleRatingClicked = (num, i) => {
  //   setRating(num);
  // };
  return (
    <div className="container">
      <p>{`you selected ${rating} out of ${rateArray.length}`}</p>
      <div>Thank you!</div>
      <p>
        We appreciate you taking the time to give a rating .If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <button onClick={handleBackClicked} className="button">
        Back
      </button>
    </div>
  );
}
