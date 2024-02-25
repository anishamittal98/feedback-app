import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedackStats from './components/FeedackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'

function App() {

    const[feedback,setFeedback]=useState(FeedbackData)

    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
        
    }

  return (
    <Router>
    <Header></Header>
    <div className='container'>
    <Routes>
    {/* <Route exact path='/'> */}
    <FeedbackForm handleAdd={addFeedback}/>
    <FeedackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    {/* </Route> */}
    <Route path='/about' element={<AboutPage/>}></Route>
    </Routes>
    </div>
    </Router>
  )
}

export default App
