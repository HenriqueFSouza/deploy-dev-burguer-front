import { ThemeProvider } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-multi-carousel/lib/styles.css';

import AppProvider from './hooks';
import { router } from './routes/index';
import GlobalStyles from './styles/globalStyles';
import { muiTheme } from './styles/muiTheme';
import stripePromise from './utils/stripeConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={muiTheme}>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router} />
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
);
