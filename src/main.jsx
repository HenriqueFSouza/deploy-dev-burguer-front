import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-multi-carousel/lib/styles.css';

import AppProvider from './hooks';
import { router } from './routes/index';
import GlobalStyles from './styles/globalStyles';
import { muiTheme } from './styles/muiTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={muiTheme}>
        <RouterProvider router={router} />
        <GlobalStyles />
        <ToastContainer autoClose={2000} theme="colored" />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
);
