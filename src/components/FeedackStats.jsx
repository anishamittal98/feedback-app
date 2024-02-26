import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { FeedbackContext } from '../context/FeedbackContext'

function FeedackStats() {

  const {feedback} = useContext(FeedbackContext)

    //average rating
    let average = feedback.reduce((acc, cur)=>{
        return acc+cur.rating
    }, 0) / feedback.length

    // average = average.toFixed(1)

  return (
    <div><div className='feedback-stats'>
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
  </div></div>
  )
}

// FeedackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedackStats