import React from "react";
import { useContext } from "react";
import FeedBackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedBackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
