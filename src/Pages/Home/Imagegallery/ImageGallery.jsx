import React from 'react';
import './Imagegallery.css';  // Ensure to add necessary CSS for styli
import trk from '../../../assets/trucklot.jpg';
const Imagegallery = () => {
  return (

     
      <div>
      <div className='d-flex justify-content-center' style={{marginRight:'60px',marginTop:'30px',gap:'3px'}}>
      <div><img src={trk} height={130} width={180} className='rounded'/></div>
      <div><img src={trk}  height={130} width={190} className='rounded'/></div>
      </div>
      
      <div className='d-flex justify-content-center' style={{marginRight:'60px',marginTop:'3px',gap:'3px'}}>
      <div><img src={trk}  height={130} width={130} className='rounded'/></div>
      <div><img src={trk}  height={130} width={100} className='rounded'/></div>
      <div><img src={trk}  height={130} width={135} className='rounded'/></div>
      </div>
      <div className='d-flex justify-content-center' style={{marginRight:'60px',marginTop:'3px',gap:'3px'}}>
      <div><img src={trk}  height={130} width={130} className='rounded'/></div>
      <div><img src={trk}  height={130} width={100} className='rounded'/></div>
      <div><img src={trk}  height={130} width={135} className='rounded'/></div>
      </div>
    </div>
  );
};

export default Imagegallery;
