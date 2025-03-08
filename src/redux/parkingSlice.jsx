// // import { createSlice } from "@reduxjs/toolkit";
// // import { fetchParkingslotasync } from "./serviceApi";

// // const initialState = {
// //   parking_slots: [],
// //   loading: false,
// //   success: false,
// //   message: '',
// //   error: null,  // Add an error field to store error messages
// //   availableCount:0,
// // };

// // const parkingSlice = createSlice({
// //   name: 'parking',
// //   initialState,
// //   reducers: {
// //     setAvailableCount: (state, action) => {
// //       state.availableCount = action.payload; // Update the available parking count
// //     }
  
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchParkingslotasync.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //         state.message = '';
// //         state.success = false;
// //       })
// //       .addCase(fetchParkingslotasync.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.parking_slots = action.payload;
// //         state.availableCount = action.payload.availableCount;
// //         state.message = action.payload.message;
// //         state.success = true;
// //       })      
// //       .addCase(fetchParkingslotasync.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload || 'Parking slot data failed';
// //       });
// //   }
// // });

// // export const { setAvailableCount } = parkingSlice.actions;
// // export default parkingSlice.reducer;


// // src/redux/parkingSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchParkingSlots } from '../redux/serviceApi';

// const parkingSlice = createSlice({
//   name: 'parking',
//   initialState: {
//     parking_slots: [],
//     availableCount: 0,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchParkingSlots.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchParkingSlots.fulfilled, (state, action) => {
//         console.log('Action Payload:', action.payload);
      
//         state.loading = false;
        
//         // Ensure the payload is an object
//         if (action.payload && typeof action.payload === 'object') {
//           const slotsArray = Object.values(action.payload); // Convert object to array
//           state.parking_slots = slotsArray;
      
//           // Calculate available count
//           state.availableCount = slotsArray.filter((slot) => !slot.isBooked).length;
//         } else {
//           // Provide a more detailed error message
//           console.error("Received unexpected data structure:", action.payload);
//           state.error = "Invalid data structure: Expected an object of parking slots.";
//         }
//       })
//          .addCase(fetchParkingSlots.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export default parkingSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParkingSlots } from '../redux/serviceApi';

const initialState = {
  parking_slots: [],       // Store the actual parking slots
  availableCount: 0,
  availableSlots: [],       // Store available count
  loading: false,          // Loading state
  error: null, 
              // Error state
};

const parkingSlice = createSlice({
  name: 'parking',
  initialState,
  reducers: {
    setAvailableCount: (state, action) => {
      state.availableCount = action.payload;
    },
    setParkingSlots: (state, action) => {
      state.availableSlots = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkingSlots.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchParkingSlots.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload && typeof action.payload === 'object') {
          // Convert object to array of slots
          const slotsArray = Object.values(action.payload);
          state.parking_slots = slotsArray;

          // Calculate available count based on isBooked status
          state.availableCount = slotsArray.filter(slot => !slot.isBooked).length;
        } else {
          state.error = 'Invalid data structure: Expected an object of parking slots.';
        }
      })
      .addCase(fetchParkingSlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load parking slots.';
      });
  },
});

export const { setAvailableCount,setParkingSlots } = parkingSlice.actions;
export default parkingSlice.reducer;
