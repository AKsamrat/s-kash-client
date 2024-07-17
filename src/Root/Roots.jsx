import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import useAuth from '../hooks/useAuth';

const Roots = () => {
  const { user, loading } = useAuth();
  return (
    <div>
      <Navbar></Navbar>
      {user ? (
        <div className="relative min-h-screen flex">
          <div>
            <Dashboard />
          </div>
          <div className="flex-1 ">
            <div className="p-5">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      ) : (
        <div className=" pt-10">
          <p className="text-4xl font-bold text-center text-slate-600">
            Welcome to S-Kash
          </p>
        </div>
      )}
    </div>
  );
};

export default Roots;
