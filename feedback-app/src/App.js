import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import Card from './components/Card';
import FeedbackList from './components/FeedbackList';
import {useState} from 'react';
import FeedbackForm from "./components/FeedbackForm";
import {nanoid} from 'nanoid';
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import AboutIconLink from "./components/AboutIconLink";

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
        <Router>
            <Header />
            <Routes>
                <Route exact path='/'
                    element={
                        <>
                            <FeedbackForm addFeedback={addFeedback} />
                            <FeedbackList removeFeedback={removeFeedback} feedbackData={feedbackData} />
                        </>
                    }>
                </Route>
            
                <Route path='/about' element={<AboutPage />}/>

                <Route path='/post/*' element={<Post />}/>
            </Routes>
            <AboutIconLink />
                {/* 
                    <Card>
                        <NavLink to="/" activeClassName='active'>Home</NavLink>
                        <NavLink to="/about" activeClassName='active'>About</NavLink>
                    </Card>
                 */}
        </Router>
        
    )
}

