import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const data = [
    {
      name: "Vishruti Mishra",
      text: `Must say the swimming classes are being conducted very nicely. The coach is really patient with the 
    classes I am seeing that confidence in him when he is in the pool.`,
    },
    {
      name: "Megna Bhujwala",
      text: `Aadhya has been attending swimming with SpArts and is completely in love with water now. This was the first time she tried swimming and has no fear of apprehension of water.`,
    },
    {
      name: "Swati Somani",
      text: `Advik is enjoying both Arts & Badminton classes. You guys are doing a great job.`,
    },
  ];
  return (
    <div className='feedback-section'>
      <h2>Happy Kids, Satisfied Parents!</h2>
      <div className='feedback-wrapper'>
        {data.map(user=><FeedbackCard key={user.name} {...user}/>)}
      </div>
    </div>
  );
};

export default Feedback;
