import React from 'react';
// import logo from '../assets/logo dark.png';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#e5f6ffbe] from-30% via-[#02004307] via-40%  to-[#e5f6ffbe]">
      <div className="max-w-7xl mx-auto ">
        <header className="p-2 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between  mx-auto">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <p className="text-3xl font-bold">
                S-<span className="text-blue-600">Kash</span>
              </p>
              {/* <img className="h-8" src={logo} alt="" /> */}
            </a>

            <div className="items-center flex-shrink-0 hidden lg:flex">
              <Link
                to={'/login'}
                className="self-center  py-2 border-slate-500  flex justify-center items-center gap-1 border-2 rounded-xl px-3 "
              >
                LogIn <GoArrowUpRight />
              </Link>
            </div>
            <button className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
