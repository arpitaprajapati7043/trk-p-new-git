import { useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import './Breadcrumbcl.css'; // Import the updated CSS file

const Breadcrumbcl = () => {
  const location = useLocation(); // Getting the current location
  const pathnames = location.pathname.split('/').filter((x) => x); // Split the pathname into an array

  // Extract the last breadcrumb value (active link) from the pathnames
  const lastBreadcrumb = pathnames[pathnames.length - 1];

  return (
    <div>
      {/* Semi-transparent overlay */}
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
      {/* Breadcrumb component */}
      <Breadcrumb className="breadcrumb">
        {/* Home link */}
        <Breadcrumb.Item
          linkAs={Link}
          linkProps={{ to: '/' }}
          className="breadcrumb-item"
        >
          Home
        </Breadcrumb.Item>
&nbsp;
        {/* Dynamic breadcrumb links */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <Breadcrumb.Item
              key={to}
              linkAs={Link}
              linkProps={{ to }}
              className="breadcrumb-item"
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>

      {/* Display the clicked breadcrumb below with 2rem font size */}
      {lastBreadcrumb && (
        <div className="active-breadcrumb">
          <h1>{lastBreadcrumb.charAt(0).toUpperCase() + lastBreadcrumb.slice(1)}</h1>
        </div>
      )}
    </div>
  );
};

export default Breadcrumbcl;

