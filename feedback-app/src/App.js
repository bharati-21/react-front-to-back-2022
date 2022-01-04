import React from "react";
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
// import Card from './components/Card';
import FeedbackList from './components/FeedbackList';
import {useState} from 'react';
import FeedbackForm from "./components/FeedbackForm";
import {nanoid} from 'nanoid';

export default function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    function removeFeedback(id) {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackData(oldFeedbackData => oldFeedbackData.filter(data => data.id !== id));
        }
    }

    function addFeedback(newFeedback) {
        setFeedbackData(oldFeedbackData => {
            return [...oldFeedbackData, {
                id: nanoid(),
                ...newFeedback
            }]
        })
    }
 
    return (
        <>
            <Header />
            <FeedbackForm addFeedback={addFeedback} />
            <FeedbackList removeFeedback={removeFeedback} feedbackData={feedbackData} />
        </>
    )
}

