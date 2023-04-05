import { createContext, useEffect, useState } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=> {
    const [feedback, setFeedback] = useState([])
    const [isLoading,setIsLoading] = useState(true)


   // loading data when refreshing browser 
 useEffect(()=>{
 fetchFeedback()
 },[])
 //fetching data from api
 const fetchFeedback = async()=>{
 const response = await fetch('/feedback/?_sort=id&_order=desc')
 const data = await response.json()
 setFeedback(data)
 setIsLoading(false)
 }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      })
    
     // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

     
      
 // for deleting data
    const deleteItem = async (id)=>{
        console.log("from app",id)
        if(window.confirm('Are you sure you want to delete')){
          await fetch(`/feedback/${id}`,{method : 'DELETE'}) 
         setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }
 

    //for adding data

    const addFeedback = async (newFeedback)=>{
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
  
      const data = await response.json()
  
      setFeedback([data, ...feedback])

      }

        //for update data

    const updateData = async (id, upData)=>{
      const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(upData),
      })
       const data = await response.json()
        setFeedback(feedback.map((item)=> (item.id === id? {...item, ...data}:item ))
       )
        
      }



   return <FeedbackContext.Provider value={{
    feedback, 
    deleteItem,
    addFeedback,
    isLoading,
    editFeedback,
    feedbackEdit,updateData
   
    }}>
        {children}
    </FeedbackContext.Provider>

}
export default FeedbackContext