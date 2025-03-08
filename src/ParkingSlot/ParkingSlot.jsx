// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchParkingslotasync } from '../redux/serviceApi';

// const ParkingSlot = () => {
//   const dispatch = useDispatch();
//   const { parking_slots, loading, error, availableCount } = useSelector((state) => state.parking);

//   useEffect(() => {
//     dispatch(fetchParkingslotasync());
//   }, [dispatch]);

//   // Log the parking slots data and available count for debugging
//   console.log("Parking slots data:", parking_slots);
//   console.log("Available count:", availableCount);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Available Parking Slots: {availableCount}</h1> {/* Display available count */}
//       {parking_slots && Object.keys(parking_slots).length > 0 ? (
//         <ul>
//           {Object.keys(parking_slots).map((slotKey) => {
//             const slot = parking_slots[slotKey];
//             return (
//               <li key={slot.slot_name}>
//                 {slot.slot_name} - {slot.isBooked ? 'Booked' : 'Available'} in {slot.location}
//               </li>
//             );
//           })}
//         </ul>
//       ) : (
//         <div>No parking slots available.</div>
//       )}
//     </div>
//   );
// };


// export default ParkingSlot;


// src/components/ParkingSlot.js

// src/components/ParkingSlot.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ParkingSpots from '../ParkingSpots/ParkingSpots';
import { fetchParkingSlots } from '../redux/serviceApi';

const ParkingSlot = () => {
  const dispatch = useDispatch();
  const {parking_slots, loading, error } = useSelector((state) => state.parking);

  useEffect(() => {
    // Fetch parking data when component mounts
    dispatch(fetchParkingSlots());
  }, [dispatch]);

  const handleBookSpot = (spot) => {
    // Logic to book a parking spot (this could be an action dispatch for booking a spot)
    console.log('Spot booked:', spot);
   navigate("/booking-page")
  };

  if (loading) return <div>Loading parking slots...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <div style={{marginLeft:'60x',marginRight:'60px'}}>
      <div className="parking-lot" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {parking_slots.map((spot) => (
          
          <ParkingSpots key={spot.id} spot={spot} onBook={handleBookSpot} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ParkingSlot;
