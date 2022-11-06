import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import OrdersCard from "./OrdersCard";

const Orders = () => {
  const navigate = useNavigate();
  const { user, logout, setLoder } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [refresh, seuRefresh] = useState(fetch);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      //jwt issu
      headers: {
        authorijation: `Bearrr ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
        logout();
        navigate("/login");
      })
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.log(error));
  }, [user?.email, refresh, logout]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/orders?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [user?.email, refresh]);
  const handalCartDelete = (id) => {
    const proceed = window.confirm("are you sure");
    if (proceed) {
      fetch(`http://localhost:5000/deleteCird/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("success");
            seuRefresh(!refresh);
          }
        });
    }
  };
  const handalStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approve" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("success fully update");
          seuRefresh(!refresh);
        }
      });
  };
  return (
    <div>
      <h1>this is orders page {orders.length} </h1>
      <div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-100 text-gray-800">
        <h2 className="text-xl font-semibold">
          Your cart <span className="text-red-500">{user?.email}</span>
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {orders.map((order) => (
            <OrdersCard
              key={order._id}
              handalCartDelete={handalCartDelete}
              handalStatus={handalStatus}
              order={order}
            ></OrdersCard>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
