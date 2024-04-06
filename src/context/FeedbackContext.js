import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid'
// import FeedbackData from "../data/FeedbackData";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(()=>{
        fetchFeedback()
    },[])

//Fetch feedback
    const fetchFeedback = async ()=>{
        const response = await fetch(`http://localhost:5000/feedback?_sort=id`)

        const data = await response.json();

        setFeedback(data)
        setIsLoading(false)
    }


//delete feedback from list
    const deleteFeedback= async (id)=>{
        if(window.confirm('Are you sure you want to delete?')){

            await fetch(`/feedback/${id}`, {method : 'DELETE'})

            setFeedback(feedback.filter((item)=> item.id !== id))
        }   
    }
//add feedback to list
    const addFeedback = async (newFeedback)=>{
        const response = await fetch('/feedback', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(newFeedback),
        })
        // newFeedback.id = uuidv4()
        const data = await response.json()
        setFeedback([data, ...feedback])
    }
//set items in form to be updated
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
//update feedback items
    const updateFeedback= async ( id, updItem )=>{
        const response = await fetch(`/feedback/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(updItem),
        })

        const data = await response.json()

        setFeedback(feedback.map((item)=>(item.id === id ? {...item, ...data} : item)))
    }


    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

