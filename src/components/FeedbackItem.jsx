import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {
 
  // const handleClick=(id)=>{

  // }

  return (
    <Card>
     <div className='num-display'>{item.rating}</div>
     <button onClick={()=>handleDelete(item.id)} className='close'>
      <FaTimes color='black'></FaTimes>
     </button>
     <div className='text-display'>
            {item.text}
        </div>
  
        </Card>
  )
}

FeedbackItem.propTypes={
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
