import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Access Redux state
import { Button, Card } from 'react-bootstrap'; // You can use bootstrap for styling
import { fetchParkingSlots } from '../redux/serviceApi'; // Import action to fetch slots
import './AvailableParking.css'


function AvailableParking() {
  const dispatch = useDispatch();
  
  // Access available parking slots and available count from the Redux store
  const { parking_slots, availableCount, loading, error } = useSelector((state) => state.parking);

  useEffect(() => {
    // Fetch parking slots when component mounts
    dispatch(fetchParkingSlots());
  }, [dispatch]);

  // Handle booking logic
  const handleBooking = (slotId) => {
    console.log(`Booking parking slot with id: ${slotId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="parking-container">
      <h1>Available Parking Slots</h1>

      {availableCount > 0 ? (
        <div className="parking-slots">
          {parking_slots
            .filter((slot) => !slot.isBooked) // Only show available slots
            .map((slot) => (
              <Card key={slot.id} className="parking-slot-card">
                <Card.Body>
                  <Card.Title>{slot.slotName}</Card.Title>
                  <Card.Text>{slot.location}</Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => handleBooking(slot.id)}
                  >
                    Book Slot
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      ) : (
        <p>No available parking slots.</p>
      )}
    </div>
  );
}

export default AvailableParking;
