import React from 'react'
import Card from './Card';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem(props) {
    const {id,text, rating} = props.data;
    return (
        <Card>
            <div className='feedback-rating'>{rating}</div>
           
            <div className='feedback-text'>{text}</div>
            <button onClick={(e) => props.removeFeedback(id)} className='icon close'>
                <FaTimes color="#000000"/>
            </button>
        </Card>
    )
}

export default FeedbackItem
