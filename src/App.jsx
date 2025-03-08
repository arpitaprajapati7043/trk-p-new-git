import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Parking from './Pages/Parking/Parking';
import Contact from './Pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchParkingSlots } from './redux/serviceApi';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loading from './Loading/Loading';
import AvailableParking from './AvailableParking/AvailableParking';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    // Dispatch the action to fetch parking slots when the app loads
    dispatch(fetchParkingSlots());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/parking' element={<Parking />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/availableparking' element={<AvailableParking />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
