import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://parking-lot-backend-hpob.onrender.com/', // Backend URL
  withCredentials: true, // Allow cookies to be sent with the request
});

const ENDPOINTS = {
  PARKING_SLOT: 'api/', // Correct API endpoint
};

// export const fetchParkingslotasync = createAsyncThunk(
//   'api/parking',  // Action type
//   async (payload, { rejectWithValue }) => {
//     try {
//       console.log("Sending parking slot request with payload:", payload);
//       const response = await instance.get(ENDPOINTS.PARKING_SLOT, payload);
//       console.log("Response from server:", response);
//       return response.data; // Return data from the response
//     } catch (error) {
//       console.error("Error fetching parking slots:", error);
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch parking slots');
//     }
//   }
// );


export const fetchParkingSlots = createAsyncThunk('parking/fetchSlots', async () => {
  const response = await instance.get(ENDPOINTS.PARKING_SLOT); // Your backend API
  return response.data;
});