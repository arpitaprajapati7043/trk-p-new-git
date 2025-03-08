import React from 'react';
import './Home.css'
import aboutimg from '../../assets/trucklot.jpg'
import { FaShieldAlt, FaRegCalendarCheck, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons for the section
import Faq from './Faq';
import HowMake from './Howmake';

import Loading from '../../Loading/Loading';


const Home = () => {
  return (
    <div>
    
    <section style={{}}>
  


    <div style={{marginLeft:'60px',marginRight:'60px'}}> 
     <div className='d-flex justify-content-between gap-5'>
    <div className='bg-dark' >
 <img 
    src={aboutimg} // Replace with your actual image URL
    alt="Truck Parking"
    height={250} 
    width={400} 
   style={{borderRadius:'30px'}}// Add Bootstrap's rounded class here
   className='rounded'
  /> 
  </div>
    <div style={{width:'40%',textAlign:'start'}}>
    <h2 className="text-center mb-5 why-choose-title"><span className='why-title'>Why Choose ParkMate?</span></h2>
    ParkMate offers convenient truck parking with both Short Stay and Long Stay options. Short Stay is just a few minutes away, while Long Stay is a quick 10-minute shuttle ride, with buses running every 10-15 minutes. Your truck is always secure and easily accessible.</div>
    </div>





     
</div>


<div className="container my-5" style={{marginTop:'50px'}}>

<div className="row">
  {/* Safe and Secure Parking */}
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="feature-box text-center">
      <FaShieldAlt className="feature-icon" />
      <h4>Safe and Secure Parking</h4>
      <p>With 24/7 surveillance and dedicated spaces for trucks, your vehicle is in safe hands.</p>
    </div>
  </div>

  {/* Easy to Use */}
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="feature-box text-center">
      <FaRegCalendarCheck className="feature-icon" />
      <h4>Easy to Use</h4>
      <p>Our simple online booking system makes finding and reserving your parking spot a breeze.</p>
    </div>
  </div>

  {/* Affordable Rates */}
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="feature-box text-center">
      <FaDollarSign className="feature-icon" />
      <h4>Affordable Rates</h4>
      <p>We offer competitive pricing to ensure your business stays cost-effective.</p>
    </div>
  </div>

  {/* Convenient Locations */}
  <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
    <div className="feature-box text-center">
      <FaMapMarkerAlt className="feature-icon" />
      <h4>Convenient Locations</h4>
      <p>Multiple parking lots strategically located to make your journey smoother.</p>
    </div>
  </div>
</div>
</div>
  
    <div style={{marginTop:'90px'}}>
    <h1 className='why-title'>Parking Booking FAQs </h1>
<div>
<Faq/>
</div>
    
    </div>
      
    <div>
    <HowMake/>
    </div>
    </section>

   

  
    </div>
  );
};

export default Home;
