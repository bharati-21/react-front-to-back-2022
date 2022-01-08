import React, {useContext} from 'react'
import Card from './Card';
import {FaTimes} from 'react-icons/fa';
import { FeedbackContext } from '../context/FeedbackContext';

function FeedbackItem(props) {
    const {id,text, rating} = props.data;
    const {removeFeedback} = useContext(FeedbackContext);
    
    return (
        <Card>
            <div className='feedback-rating'>{rating}</div>
           
            <div className='feedback-text'>{text}</div>
            <button onClick={(e) => removeFeedback(id)} className='icon close'>
                <FaTimes color="#000000"/>
            </button>
        </Card>
    )
}

export default FeedbackItem
