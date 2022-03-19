import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContext";

function FeedBackStats() {
  const { feedback } = useContext(FeedbackContext);
  //calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating / feedback.length;
  }, 0);

  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}

export default FeedBackStats;
