import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

const Faq = () => {
  // Creating state for each collapsible section
  const [open, setOpen] = useState([false, false, false, false, false, false]);

  // Function to toggle specific collapsible section
  const toggleCollapse = (index) => {
    const updatedOpen = [...open];
    updatedOpen[index] = !updatedOpen[index]; // Toggle the clicked section
    setOpen(updatedOpen); // Update the state
  };

  return (

    <div className="container my-5">

<div className='d-flex justify-content-center gap-5' style={{marginLeft:'60px',marginRight:'60px'}}>
<div>
<div>
 {/* Collapsible section 1 */}
 <Button
 variant="outline-primary"
 onClick={() => toggleCollapse(0)}
 aria-controls="collapse-text-1"
 aria-expanded={open[0]}
 className="mb-3 w-100"
 style={{ fontWeight: 'bold',textAlign:'start' }}
>
 {open[0] ? '−' : '+'} How to make sure that my vehicle is safe?
</Button>
<Collapse in={open[0]}>
 <div id="collapse-text-1">
   <p>Most of our car parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.</p>
 </div>
</Collapse>
</div>
<div>
{/* Collapsible section 2 */}
<Button
 variant="outline-primary"
 onClick={() => toggleCollapse(1)}
 aria-controls="collapse-text-2"
 aria-expanded={open[1]}
 className="mb-3 w-100"
 style={{ fontWeight: 'bold' }}
>
 {open[1] ? '−' : '+'} Do I get to choose from multiple spots?
</Button>
<Collapse in={open[1]}>
 <div id="collapse-text-2">
   <p>Most of our  parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.</p>
 </div>
</Collapse>
</div>

<div>
{/* Collapsible section 3 */}
<Button
 variant="outline-primary"
 onClick={() => toggleCollapse(2)}
 aria-controls="collapse-text-3"
 aria-expanded={open[2]}
 className="mb-3 w-100"
 style={{ fontWeight: 'bold' }}
>
 {open[2] ? '−' : '+'} What if my return flight is delayed?
</Button>
<Collapse in={open[2]}>
 <div id="collapse-text-3">
   <p>Most of our parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.
   </p>
 </div>
</Collapse>
</div>


<div>  {/* Collapsible section 5 */}
<Button
  variant="outline-primary"
  onClick={() => toggleCollapse(4)}
  aria-controls="collapse-text-5"
  aria-expanded={open[4]}
  className="mb-3 w-100"
  style={{ fontWeight: 'bold' }}
>
  {open[4] ? '−' : '+'} .What payment methods are accepted?
  
</Button>
<Collapse in={open[4]}>
  <div id="collapse-text-5">
    <p>Most of our car parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.</p>
  </div>
</Collapse></div>
</div>


<div>

<div>
 {/* Collapsible section 5 */}
 <Button
 variant="outline-primary"
 onClick={() => toggleCollapse(4)}
 aria-controls="collapse-text-5"
 aria-expanded={open[4]}
 className="mb-3 w-100"
 style={{ fontWeight: 'bold' }}
>
 {open[4] ? '−' : '+'} Is there a way to make a complaint? 
</Button>
<Collapse in={open[4]}>
 <div id="collapse-text-5">
   <p> Most of ourparks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.</p>
 </div>
</Collapse>

</div>

<div>  {/* Collapsible section 5 */}
<Button
  variant="outline-primary"
  onClick={() => toggleCollapse(4)}
  aria-controls="collapse-text-5"
  aria-expanded={open[4]}
  className="mb-3 w-100"
  style={{ fontWeight: 'bold' }}
>
  {open[4] ? '−' : '+'} How far in advance can I book parking online?
  
</Button>
<Collapse in={open[4]}>
  <div id="collapse-text-5">
    <p> Most of our car parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times..</p>
  </div>
</Collapse></div>
<div> {/* Collapsible section 4 */}
<Button
  variant="outline-primary"
  onClick={() => toggleCollapse(3)}
  aria-controls="collapse-text-4"
  aria-expanded={open[3]}
  className="mb-3 w-100"
  style={{ fontWeight: 'bold' }}
>
  {open[3] ? '−' : '+'} How do I enter and exit the car park?

 
</Button>
<Collapse in={open[3]}>
  <div id="collapse-text-4">
    <p> Most of our car parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.
    </p>
  </div>
</Collapse>


</div>
<div>
 {/* Collapsible section 6 */}
 <Button
 variant="outline-primary"
 onClick={() => toggleCollapse(5)}
 aria-controls="collapse-text-6"
 aria-expanded={open[5]}
 className="mb-3 w-100"
 style={{ fontWeight: 'bold' }}
>
 {open[5] ? '−' : '+'} Do I get allocated a specific parking space?
</Button>
<Collapse in={open[5]}>
 <div id="collapse-text-6">
   <p>Most of our car parks can be booked up to 12 months in advance, though some of our special offers may only be available at limited times.
   </p>
 </div>
</Collapse></div>
<div></div>
</div>
</div>

   

     
     

    </div>
  );
};

export default Faq;
