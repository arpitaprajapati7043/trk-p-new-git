import React from 'react';
import './Howmake.css'; // Link to the CSS file for styling
import Imagegallery from './Imagegallery/ImageGallery';

const Howmake = () => {
  const steps = [
    { id: 1, title: "Arrive at Parking Lot", description: "Drive into the parking lot and find a space." },
    { id: 2, title: "Park Your Vehicle", description: "Choose an appropriate parking spot and park your car." },
    { id: 3, title: "Leave the Parking Lot", description: "Exit the parking lot after you're done." },
  ];

  return (
    <div style={{marginTop:'30px'}}>
    <h1 className='why-title'>How to book your parking in 3 steps</h1>
    <div className='d-flex justify-content-center'  >
   
    <div className="timeline-container">
      {steps.map((step, index) => (
        <div key={step.id} className="timeline-item">
          <div className="circle"><div className='circle-sub'>{step.id}</div></div>
          <div className="content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          {/* Add line after each step except the last one */}
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
    <div>
    <Imagegallery/>
    </div>

    </div>

    </div>
  );
};

export default Howmake;
