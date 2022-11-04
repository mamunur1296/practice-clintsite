import React, { useEffect, useState } from "react";
import DisplayPost from "./DisplayPost";

const Display = () => {
  const [poats, setPostes] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allpost")
      .then((res) => res.json())
      .then((data) => setPostes(data));
  }, [refresh]);
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
    </div>
  );
};

export default Display;
