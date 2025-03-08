// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhoneAlt } from "react-icons/fa";
// import './Footer.css'
// import { FaLocationDot } from "react-icons/fa6";
// import { FaArrowUp } from "react-icons/fa";
// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"  // Smooth scroll effect
//     });
//   };

//   const styles = {
//     scrollButton: {
//       position: 'fixed',
//       bottom: '30px',
//       right: '30px',
//       backgroundColor: '#e67e22',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50%',
//       padding: '10px',
//       fontSize: '20px',
//       cursor: 'pointer',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//       zIndex: '9999',
//       display: 'none'  // Initially hidden
//     },
//   };
//   return (
//    <div>
//    <footer className='footer-bg '>
//    <div>
//    <div className='d-flex justify-content-between m-margin'>
//    <div style={{width:'35%'}}>
//    <h4 className="text-start text-light"><FaLocationDot style={{color:' #e67e22',marginTop:'-5px'}}/>ParkMate</h4>
// <p className="text-start fs-n f-txt">
// ParkMate is dedicated to providing secure and convenient truck parking solutions across Canada. We ensure that truck drivers have a safe and reliable place to park their vehicles while on the road.
// </p>
//    </div>

//    <div>
//    <h4 className="text-start text-light">Navigation</h4>
//    <ul className="text-start fs-n">
//      <li><Link className="link f-txt">Home</Link></li>
//      <li><Link className="link f-txt">About</Link></li>
//      <li><Link className="link f-txt">Booking</Link></li>
//      <li><Link className="link f-txt">Price</Link></li>
//    </ul></div>

//    <div>
//    <h4 className="text-start text-light">Discover</h4>
// <ul className="text-start fs-n">
//   <li><Link className="link f-txt">Home</Link></li>
//   <li><Link className="link f-txt">About</Link></li>
//   <li><Link className="link f-txt">Booking</Link></li>
//   <li><Link className="link f-txt">Price</Link></li>
// </ul>
//    </div>

//    <div><h4 className="text-start text-light">Contact Info</h4>
//    <div className="text-start fs-n">
//      <div className="divnk f-txt">Corporate Office Address:</div>
//      <div>1234 River Street New York, NY 01001</div>
//      <div>Customer Service:</div>
//      <div><Link className="link f-txt"><FaPhoneAlt />&nbsp;1 (888) 123 4567</Link></div>
//    </div></div>
//    </div>

//    </div>

//    <button
//           onClick={scrollToTop}
//           style={styles.scrollButton}
//           className="scroll-to-top"
//         >
//           <FaArrowUp />
//         </button>

//    <div> © 2025. All rights reserved.</div>
//    </footer>
//    <div style={{height:'50px',backgroundColor:'var(--footer-main-color)'}}>
//    <div className="b-div "/>
//    <span><h6 className='m-3 f-txt'>Made with ❤️ by ParkMate Team</h6></span>

//    </div>

//    </div>


   
//   );
 
  
// };



// export default Footer;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {  // Show button after scrolling 300px
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up event listener
  }, []);

  

  return (
    <div>
      <footer className='footer-bg'>
        <div>
          <div className='d-flex justify-content-between m-margin'>
            <div style={{ width: '35%' }}>
              <h4 className="text-start text-light">
                <FaLocationDot style={{ color: '#e67e22', marginTop: '-5px' }} />
                ParkMate
              </h4>
              <p className="text-start fs-n f-txt">
                ParkMate is dedicated to providing secure and convenient truck parking solutions across Canada. We ensure that truck drivers have a safe and reliable place to park their vehicles while on the road.
              </p>
              <div>
              
              <div className="parent">
      <div className="controls one">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-github"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
              </div>
            </div>

            <div>
              <h4 className="text-start text-light">Navigation</h4>
              <ul className="text-start fs-n">
                <li><Link className="link f-txt">Home</Link></li>
                <li><Link className="link f-txt">About</Link></li>
                <li><Link className="link f-txt">Booking</Link></li>
                <li><Link className="link f-txt">Price</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-start text-light">Discover</h4>
              <ul className="text-start fs-n">
                <li><Link className="link f-txt">Home</Link></li>
                <li><Link className="link f-txt">About</Link></li>
                <li><Link className="link f-txt">Booking</Link></li>
                <li><Link  className="link f-txt">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-start text-light">Contact Info</h4>
              <div className="text-start fs-n">
                <div className="divnk f-txt">Corporate Office Address:</div>
                <div>1234 River Street New York, NY 01001</div>
                <div>Customer Service:</div>
                <div><Link className="link f-txt"><FaPhoneAlt />&nbsp;1 (888) 123 4567</Link></div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}  // Dynamically add 'show' class
        >
        <FaArrowUp />
        </button>

        <div>© 2025. All rights reserved.</div>
      </footer>
      <div style={{ height: '50px', backgroundColor: 'var(--footer-main-color)' }}>
        <div className="b-div" />
        <span><h6 className='m-3 f-txt'>Made with ❤️ by ParkMate Team</h6></span>
      </div>
    </div>
  );
};

export default Footer;
