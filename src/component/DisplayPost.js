import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayPost = ({ post, setRefresh, refresh }) => {
  const { title, catagory, price, body, _id, img } = post;

  const handalDelite = (post) => {
    const agree = window.confirm(`are you sure Deleted it ${post.title}`);
    if (agree) {
      fetch(`http://localhost:5000/allpost/${post._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("your product delete Successfull");
            setRefresh(!refresh);
          }
        });
    }
  };
  return (
    <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            className="mb-0 capitalize text-gray-100"
          >
            {title}
          </a>
        </div>
        <Link to={`/update/${_id}`}>
          <button>Update</button>
        </Link>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={img}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>Price : {price}</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold text-violet-400">
              {catagory}
            </h3>
          </a>
          <p className="leading-snug text-gray-400">{body}</p>
        </div>
      </div>
      <button
        onClick={() => handalDelite(post)}
        className="btn bg-gray-200 w-full py-2 mt-10 text-black"
      >
        Delite
      </button>
      <Link to={`/checkout/${_id}`}>
        <button className="btn bg-gray-200 w-full py-2 mt-10 text-black">
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default DisplayPost;
