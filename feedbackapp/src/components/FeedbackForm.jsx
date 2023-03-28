import React, { useState } from "react";

import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating ,setRating] = useState (10)

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("text needs to be atleast 10");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
   // console.log(e.target.value);
  };
   const handleSubmit = (e)=>{
    e.preventDefault()
      if(text.trim().length >10){
        const newFeedback ={
            text,
            rating
        }
   handleAdd(newFeedback)
      }
   }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Edit Feedback</h2>
        <RatingSelect select = {(rating)=>setRating(rating)} />
        <div className="input-group">
          <input
            placeholder="write a review...."
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
