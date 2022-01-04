import React from "react";
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
// import Card from './components/Card';
import FeedbackList from './components/FeedbackList';
import {useState, useEffect} from 'react';

export default function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);



    function closeFeedbackItem(id) {
        if(window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackData(oldFeedbackData => oldFeedbackData.filter(data => data.id !== id));
        }
    }

    return (
        <>
            <Header />
            <FeedbackList closeFeedbackItem={closeFeedbackItem} feedbackData={feedbackData} />
        </>
    )
}

