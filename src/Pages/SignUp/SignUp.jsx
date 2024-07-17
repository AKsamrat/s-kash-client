import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { imageUpload } from './../../api/util/index';
import { useState } from 'react';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';

const SignUp = () => {
  const { register } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const username = form.name.value;
    const email = form.email.value;
    const mobileNo = form.MobileNo.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      const image_url = await imageUpload(image);
      console.log(username);
      const hrData = {
        username,
        email,
        password,
        role: 'user',
        image_url,
        mobileNo,
      };

      const res = await register(hrData);
      if (res.success) {
        form.reset();
        toast.success('Successfully Registered!');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error('err.massage');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to S-Kash</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Mobile Number
                </label>
              </div>
              <input
                type="tel"
                name="MobileNo"
                id="phone"
                required
                placeholder="phone number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Pin
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="5-digit PIN"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#FEBF32] w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="hover:underline hover:text-[#FEBF32] text-gray-600 "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
