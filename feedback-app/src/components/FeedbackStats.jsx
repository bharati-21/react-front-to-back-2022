import React from 'react'

function FeedbackStats({feedbackData}) {

    const sum = feedbackData.reduce((total, data) => {
        return total + data.rating;
    }, 0 )
    const average = (sum / feedbackData.length).toFixed(1);

    return (
        <div className="feedback-stats">
            <h4 className="total-reviews">{feedbackData.length} Reviews</h4>
            <h4 className="average-rating">Average Rating: {isNaN(average)? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats
