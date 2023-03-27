import FeedbacckStatus from "./components/FeedbacckStatus.jsx";
import FeedbackList from "./components/FeedbackList.jsx"
import Header from "./components/Header";
import feedbackData from "./components/data/feedbackData";
import { useState } from "react";

function App() {
   const [feedback ,setFeedback] = useState(feedbackData)
   
   const deleteItem = (id)=>{
       console.log("from app",id)
       if(window.confirm('Are you sure you want to delete')){
        setFeedback(feedback.filter((item)=> item.id !== id))
       }
   }
  return (
    <> 
   
    <Header text='Feedback Form'  />
    <div className="container">
    <FeedbacckStatus feedback={feedback} />
    <FeedbackList feedback={feedback}  handleDelete={deleteItem} />
    
    </div>
    </>
   
  );
}

export default App;
