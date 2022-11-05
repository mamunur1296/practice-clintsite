import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Checkout = () => {
  const { title, body, img, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handalInputfild = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregester";
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const userInfo = {
      UserOid: _id,
      serviceName: title,
      name,
      email,
      address,
      city,
      state,
      zip,
    };
    fetch("http://localhost:5000/checkoutUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("seccess your Order");
          navigate("/display");
        }
      });
  };
  return (
    <div>
      This is check OUt page {title}
      <section className="p-6 bg-gray-100 text-gray-800">
        <form
          onSubmit={handalInputfild}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">{title}</p>
              <p className="text-xs">{body}</p>
              <img src={img} alt="" />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  name="state"
                  type="text"
                  placeholder="state/province"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  name="zip"
                  type="text"
                  placeholder="ZIP"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <button className="btn ">submit it</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
