// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Header/Header';
// import Breadcrumbcl from '../Beadcrumbcl/Breadcrumbcl';

// const Herocmp = () => {
//   const location = useLocation(); // Hook to track current route

//   return (
//     <div
//       style={{
//         backgroundImage: location.pathname === '/about' ? 'none' : 'url(ggg.jpg)', // Hide background image on about page
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh', // Full height of the section
//         color: 'white', // Text color white for better visibility
//         position: 'relative',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center', // Centering the text
//         flexDirection: 'column',
//       }}
//     >
//       {/* Show the Header */}
//       <Header />
      
//       {/* Conditionally render Breadcrumbcl on /about */}
//       {location.pathname === '/about' ? (
//         <Breadcrumbcl /> // Show Breadcrumbcl on /about
//       ) : (
//         <>
//           {/* Semi-transparent overlay visible on non-about pages */}
//           <div
//             style={{
//               position: 'absolute',
//               top: 55,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: 'rgba(13, 62, 84, 0.9)', // Semi-transparent overlay
//               zIndex: 1,
//             }}
//           />
//           {/* Hero Content for non-about pages */}
//           <div style={{ position: 'relative', width: '100%' }}>
//             <h1
//               style={{
//                 fontSize: '2.5rem',
//                 fontWeight: 'bold',
//                 letterSpacing: '2px',
//                 textTransform: 'uppercase',
//                 textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
//                 marginBottom: '20px',
//                 marginTop: '90px',
//               }}
//             >
//               Welcome to Our Parking Lot
//             </h1>
//             <p
//               style={{
//                 fontSize: '1.25rem',
//                 fontStyle: 'italic',
//                 letterSpacing: '1px',
//                 color: 'rgba(179, 113, 14)',
//                 opacity: '0.9',
//                 textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
//               }}
//             >
//               Find your perfect parking spot easily and securely.
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Breadcrumbcl from '../Beadcrumbcl/Breadcrumbcl';

const Herocmp = () => {
  const location = useLocation(); // To track the current route

  // List of routes where background image height should be 50vh
  const routesWithShortHeight = ['/about', '/parking','/contact'];

  // Check if current path is in the routesWithShortHeight array
  const isShortHeight = routesWithShortHeight.includes(location.pathname);

  return (
    <div
      style={{
        backgroundImage: 'url(ggg.jpg)', // Keep the image visible
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Position the image at the center
        backgroundRepeat: 'no-repeat',
        height: isShortHeight ? '50vh' : '100vh', // Conditionally set height to 50vh for specific routes
        color: 'white',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '-70px', // Adjust this to prevent overlap with the fixed navbar
        display: 'flex', // Make this container a flexbox container
      }}
    >
      {/* Conditionally render Breadcrumbcl for any route except home ("/") */}
      {location.pathname !== '/' && <Breadcrumbcl />}

      {/* Hero Content for homepage */}
      {location.pathname === '/' && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(13, 62, 84, 0.9)', // Semi-transparent overlay
              zIndex: 2, // Overlay zIndex
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 3, // Text content zIndex should be higher than overlay
              display: 'flex', // Make the text container a flexbox container
              flexDirection: 'column', // Stack elements vertically
              justifyContent: 'center', // Vertically center content
              alignItems: 'center', // Horizontally center content
              height: '100%', // Make the container fill the entire height of the parent div
              marginTop: '30px',
            }}
          >
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
                marginBottom: '20px',
              }}
            >
              Welcome to Our Parking Lot
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                letterSpacing: '1px',
                color: 'rgba(179, 113, 14)',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.9)',
              }}
            >
              Find your perfect parking spot easily and securely.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Herocmp;
