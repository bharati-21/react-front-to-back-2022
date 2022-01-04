import React from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackStats from './FeedbackStats';
import {motion, AnimatePresence} from 'framer-motion'


function FeedbackList({feedbackData, removeFeedback}) {
    console.log(feedbackData);
    return (
        <section className='feedback-list'>
            <article className="container">
                <FeedbackStats feedbackData={feedbackData}/>
                <AnimatePresence>
                {
                    feedbackData.map(data => {
                        return <motion.div 
                            key={data.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}} >
                            <FeedbackItem key={data.id} data={data} removeFeedback={removeFeedback}/>
                        </motion.div>
                    })
                }
                </AnimatePresence>
            </article>
        </section>
    )
}


// return (
//     <section className='feedback-list'>
//         <article className="container">
//             <FeedbackStats feedbackData={feedbackData}/>
//             {
//                 feedbackData.map(data => {
//                     return <FeedbackItem key={data.id} data={data} removeFeedback={removeFeedback}/>
//                 })
//             }
//         </article>
//     </section>
// )

export default FeedbackList
