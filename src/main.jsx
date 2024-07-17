import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Roots from './Root/Roots.jsx';

import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Login from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Sendmoney from './Pages/Dashboard/Sendmoney.jsx';
import CashIn from './Pages/Dashboard/CashIn.jsx';
import CashOut from './Pages/Dashboard/CashOut.jsx';
import TransactionHistory from './Pages/Dashboard/TransactionHistory.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/sendMoney',
        element: <Sendmoney />,
      },
      {
        path: '/cashIn',
        element: <CashIn />,
      },
      {
        path: '/cashOut',
        element: <CashOut />,
      },
      {
        path: '/transactionHistory',
        element: <TransactionHistory />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
