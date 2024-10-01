import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './Themeslice.jsx'; // Adjust the path accordingly

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;
