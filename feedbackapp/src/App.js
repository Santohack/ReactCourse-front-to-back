import FeedbacckStatus from "./components/FeedbacckStatus.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackList from "./components/FeedbackList.jsx"
import Header from "./components/Header";
import feedbackData from "./components/data/feedbackData";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
   const [feedback ,setFeedback] = useState(feedbackData)
    const addFeedback = (newFeedback)=>{
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
      
    }
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
      <FeedbackForm handleAdd = {addFeedback} />
    <FeedbacckStatus feedback={feedback} />
    <FeedbackList feedback={feedback}  handleDelete={deleteItem} />
    
    </div>
    </>
   
  );
}

export default App;
