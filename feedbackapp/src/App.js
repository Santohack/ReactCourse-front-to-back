import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import AboutPage from "./pages/AboutPage.jsx";
import FeedbacckStatus from "./components/FeedbacckStatus.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import FeedbackIcon from './components/FeedbackIcon.jsx';
import FeedbackList from "./components/FeedbackList.jsx"
import Header from "./components/Header";
import NoMatchFpund from './components/NoMatchFpund.jsx';
import Post from './components/Post.jsx';
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
   
    <Router>
    <Header text='Feedback Form'  />
    <div className="container">
     <Routes>
     <Route exact path ='/' element ={<>
     
      <FeedbackForm handleAdd = {addFeedback} />
    <FeedbacckStatus feedback={feedback} />
    <FeedbackList feedback={feedback}  handleDelete={deleteItem} />
     </>} >
       

      </Route>
      
    
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/post/*' element={<Post/>}/>
    <Route path='*' element = {<NoMatchFpund />} />
     
     </Routes>
    
    </div>
    <FeedbackIcon />
    </Router>
    </>
   
  );
}

export default App;
