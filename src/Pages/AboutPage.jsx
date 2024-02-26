import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About This Project</h1>
            <p>This is a React project application to leave feedback.</p>

            <Link to='/'>Back to Home Page</Link>
        </div>
    </Card>
  )
}

export default AboutPage
