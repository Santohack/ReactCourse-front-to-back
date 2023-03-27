

const FeedbacckStatus = ({feedback}) => {
    
   const avg =( feedback.reduce((acc, curr)=>{
    return acc+curr.rating
   },0) / feedback.length).toFixed(1)
     

  
  return (
    <div className="feedback-stats">
        <h4>Total : {feedback.length}</h4>
        <h4>Avg: {isNaN(avg) ? 0: avg}</h4>
     
    </div>
  )
}

export default FeedbacckStatus
