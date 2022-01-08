import React, {useContext} from 'react'
import { FeedbackContext } from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext);
console.log(feedback)
    const sum = feedback.reduce((total, data) => {
        console.log(total);
        return total + parseInt(data.rating);
    }, 0 )
    const average = (sum / feedback.length).toFixed(1);

    return (
        <div className="feedback-stats">
            <h4 className="total-reviews">{feedback.length} Reviews</h4>
            <h4 className="average-rating">Average Rating: {isNaN(average)? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats
