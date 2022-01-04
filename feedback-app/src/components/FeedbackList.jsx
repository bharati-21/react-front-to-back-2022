import React from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackStats from './FeedbackStats';

function FeedbackList({feedbackData, closeFeedbackItem, totalReviews, averageRating}) {
    return (
        <section className='feedback-list'>
            <article className="container">
                <FeedbackStats feedbackData={feedbackData}/>
                {
                    feedbackData.map(data => {
                        return <FeedbackItem key={data.id} data={data} closeFeedbackItem={closeFeedbackItem}/>
                    })
                }
            </article>
        </section>
    )
}

export default FeedbackList
