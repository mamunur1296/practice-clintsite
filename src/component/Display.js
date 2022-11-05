import React, { useEffect, useState } from "react";
import DisplayPost from "./DisplayPost";

const Display = () => {
  const [poats, setPostes] = useState([]);
  const [refresh, setRefresh] = useState(false);
  //paginectation
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);
  console.log(pages);

  useEffect(() => {
    fetch(`http://localhost:5000/allpost?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setPostes(data.rejult);
        setCount(data.count);
      });
  }, [refresh, page, size]);
  return (
    <div>
      <h1>posts:{poats.length} </h1>
      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
        {poats.map((post) => (
          <DisplayPost
            key={post._id}
            refresh={refresh}
            setRefresh={setRefresh}
            post={post}
          ></DisplayPost>
        ))}
      </div>
      <div className=" my-16 text-red-600">
        <p>Current page : {page + 1}</p>
        {[...Array(pages).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={
              page === number
                ? "p-4 bg-green-500 text-3xl border border-red-500 m-5"
                : "p-4 bg-green-300 text-3xl border border-red-500 m-5"
            }
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select
          onChange={(e) => setSize(e.target.value)}
          className="p-3 bg-green-500 text-3xl border border-red-500 m-5"
        >
          <option value="5">5</option>
          <option selected value="10">
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Display;
