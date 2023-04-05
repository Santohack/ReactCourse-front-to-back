import { AnimatePresence, motion } from "framer-motion";

import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import { useContext } from "react";

//import PropTypes from "prop-types";


function FeedbackList() {
      
  const {feedback,isLoading} = useContext(FeedbackContext)


  if (!isLoading &&(!feedback || feedback.length === 0)) {
    return <p>No FeedbackData Yet</p>;
  }
  return (
    isLoading? (<Spinner />) : (<div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <FeedbackItem
            key={item.id}
            item={item}
                            
          />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>)
    
  );






  
  // return (
  //   <div className="feedback-list">
  //    {feedback.map((item)=>(
  //       <FeedbackItem key={item.id} item={item}
  //       handleDelete = {handleDelete}
  //       />
  //    )
  //    )}
  //   </div>
  // )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.number.isRequired,PropTypes.string.isRequired]),
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
