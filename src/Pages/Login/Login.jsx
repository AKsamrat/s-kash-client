import { Link, useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    setEmail(email);
    const password = form.password.value;
    try {
      // setLoading(true);

      // await signIn(email, password);
      navigate(from);
      toast.success('Signup Succesfully');
    } catch (err) {
      console.log(err);
      toast.error('err.massage');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onBlur={e => setEmail(e.target.value)}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FEBF32] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FEBF32] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#FEBF32] w-full rounded-md py-3 text-white"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{' '}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#FEBF32] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;