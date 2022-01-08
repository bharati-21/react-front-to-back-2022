import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Header from './components/Header';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from './components/FeedbackList';
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import Post from "./components/Post";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackProvider  from "./context/FeedbackContext";

export default function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/'
                        element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats/>
                                <FeedbackList />
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
        </FeedbackProvider>
        
    )
}

