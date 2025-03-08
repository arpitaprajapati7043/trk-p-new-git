// Privacy.js
import React from "react";
import './About.css'
import AboutImg from '../../assets/trucklot.jpg'
import imgpark from '../../assets/parking.svg'
import reward from '../../assets/reward.svg'
import rated from '../../assets/rated.png';
import driving from '../../assets/driving.png'
const About= () => {
    return (
        <div style={{marginTop:'80px'}}>
            <div className="row" style={{marginLeft:'60px',marginRight:'60px'}}>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="our-content">
                    
                        <h4>Sell and Buy in any condition, Price or location.</h4>
                        <p> Truck Parking offers a 24/7 lot attendant, air-conditioned offices, and bathrooms in our truck lots. Our facilities are located in convenient areas off the highway and are gated and supervised by personnel. Most of our lots have mechanic shops available to use. We offer parking services for a wide array of vehicles including but not limited to trucks, trailers, bobtails, car haulers, box trucks, small trailers, food trucks, boats, and RVs.</p>
                        <p> For any inquiries, please give any of our offices a call or complete the quote form on our website, and we will get back to you as soon as possible. At Discount Truck Parking, we offer differentiated and personalized customer service along with our safe parking locations. Join the Discount Parking family today!</p>
                        <a className="btn-first btn-small" href="/themes/tm/yoauto/about">Find Out More</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="work-sec animate-img">
                                
                                    <img className=" rounded" alt="hero" src={AboutImg} style={{ height: '100', width: '100%' }} />
                                
                            </div>
                        </div>
                    </div>
                    
                      
                       
                    
                </div>
            </div>


            <div className="abt-sub">
        
            <div className="abt-sub d-flex justify-content-center gap-5">

            <div>
            
            <p><img src={imgpark} height={20} width={20}/></p>
            <p>200+</p>
            Parking Locations</div>
            <div>
            <p>
            <img src={reward} height={30} width={30}/>
            </p>
           
            <p>95%</p>
            Customer satisfaction</div>
            <div>

            <p><img src={rated} height={30} width={30}/></p>
            <p>4.5</p>
            Start Rated App</div>
            <div>
            <p><img src={driving} height={30} width={30}/></p>
            <p>600+</p>
            Monthly User</div>
            </div>
            </div>
            <div>
            </div>

            <div style={{marginTop:'50px',marginLeft:'60px',marginRight:'60px'}}> </div>
            <div className=" d-flex justify-content-between gap-5"style={{marginTop:'50px',marginLeft:'60px',marginRight:'60px'}} >
           
            <div><h1 className="why-title">Our History</h1><p style={{textAlign:'start',width:'500px'}}>
            The effect of large-scale parking in-city has long been contentious. Elimination of historic structures for garages or lots led to historical preservation movements in many cities. The acreage devoted to parking is widely seen as disrupting a walkable urban fabric, maximizing convenience to each individual building.

            </p></div>
            <p style={{width:'350px',height:'250px',backgroundColor:'green',marginTop:'-40px'}}>
          
         

            <div 
            style={{
              border: '5px solid red',
              borderTopRightRadius: '25px',
              borderTopLeftRadius: '25px',
              overflow: 'hidden' // To ensure the image stays within the rounded corners
            }}>
            
            <div 
              style={{
                borderTop: '5px solid orange',
                borderTopRightRadius: '15px',
                borderTopLeftRadius: '10px',
                borderLeftRadius: '10px',
                overflow: 'hidden', // Ensure the image stays within the border and radius
              }}>
              
              <img 
                src={AboutImg} 
                height={250} 
                width={350} 
                className="rounded" 
                alt="" // Decorative image should have an empty alt text
                style={{
                  display: 'block', 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover' // Ensures the image maintains its aspect ratio and covers the area well
                }} 
              />
            </div>
          </div>
          

            </p>
            </div>

         
        </div>
    );
}

export default About;
