// src/components/ParkingSpot.js

// import React from 'react';

// const ParkingSpots = ({ spot, onBook }) => {
//   return (
//     <div className="parking-spot-card" style={styles.cardContainer}>
//       <div style={styles.card}>
//         <h4>{spot.slot_name}</h4>
//         <h5>{spot.location}</h5>

//         <div
//           className={`parking-spot ${spot.isBooked ? 'booked' : 'available'}`}
//           onClick={() => !spot.isBooked && onBook(spot)}
//           style={{
//             ...styles.parkingSpot,
//             backgroundColor: spot.isBooked ? '#f44336' : '#8fbc8f',
//           }}
//         >
//           <p>{spot.isBooked ? 'Unavailable' : 'Book'}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'pink',
//     padding: '15px',
//     borderRadius: '10px',
//     width: '250px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   parkingSpot: {
//     padding: '10px',
//     margin: '10px',
//     border: '1px solid #333',
//     cursor: 'pointer',
//     display: 'inline-block',
//     width: '100%',
//     textAlign: 'center',
//     borderRadius: '5px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   },
// };

// // Add media query for responsiveness
// const mediaQueries = {
//   '@media (max-width: 768px)': {
//     card: {
//       width: '100%', // Make cards full width on smaller screens
//     },
//   },
// };

// export default ParkingSpots;


import React from 'react';

const ParkingSpots = ({ spot, onBook }) => {
  return (
    <div className="parking-spot-card" style={styles.cardContainer} >
      <div style={styles.card}>
        <h4 className='text-light'>{spot.slot_name}</h4>
        <h5 className='text-light'>{spot.location}</h5>

        <div
          className={`parking-spot ${spot.isBooked ? 'booked' : 'available'}`}
          onClick={() => !spot.isBooked && onBook(spot)}
          style={{
            ...styles.parkingSpot,
            backgroundColor: spot.isBooked ? ' #9e092d' : '#054304',
           Color: spot.isBooked ? 'rgb(248, 248, 248)' : '#054304',
          }}
        >
          <p style={styles.parkingSpotText}>{spot.isBooked ? 'Unavailable' : 'Book'}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
    cardContainer: {
        marginLeft:'60px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem', // Gap between the cards
      justifyContent: 'center', // Center align the cards
      margin: '0 auto', // Centers the content horizontally
    },
    card: {
      backgroundImage: 'url(mplg2.jpg)', // Reference to the public folder
      backgroundSize: 'cover', // Ensures the image covers the card's area
      backgroundPosition: 'center', // Centers the image within the card
      padding: '15px',
      borderRadius: '10px',
      width: '250px', // Fixed card width
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center', // Center the text inside the card
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    parkingSpot: {
      padding: '10px',
      margin: '10px',
      border: '1px solid #333',
      cursor: 'pointer',
      display: 'inline-block',
      width: '100%',
      textAlign: 'center', // Center the text inside the parking spot div
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      Color:'white'
    },
    parkingSpotText: {
      margin: '0', // Remove any default margin
      textAlign: 'center', // Ensure the <p> text is centered
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  

// Add media query for responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    card: {
      width: '100%', // Make cards full width on smaller screens
    },
  },
};

export default ParkingSpots;
