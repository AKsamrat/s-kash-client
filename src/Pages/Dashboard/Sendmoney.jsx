import React from 'react';

const Sendmoney = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const mobileNo = form.MobileNo.value;
    const password = form.password.value;
  };
  return (
    <div className="w-64 lg:w-96 mx-auto">
      <p className="text-3xl font-bold text-center py-3">
        S-<span className="text-blue-600">Kash</span>
      </p>
      <h1 className="text-center text-2xl font-semibold">Send Money</h1>
      <p className="text-center pb-4">Only User to User</p>
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
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
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm mb-2">
                Amount
              </label>
            </div>
            <input
              type="number"
              name="amount"
              id="amount"
              required
              placeholder="Amount"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
    </div>
  );
};

export default Sendmoney;
