import React from 'react'
// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
// import FeedbackData from './data/FeedbackData'
import FeedackStats from './components/FeedackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
    <Router>
    <Header></Header>
    <div className='container'>
    <Routes>
    <Route exact path='/' element={
        <>
            <FeedbackForm />
            <FeedackStats />
            <FeedbackList />
        </>
    }>
    
    </Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    
    </Routes>
    <AboutIconLink />
    </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
