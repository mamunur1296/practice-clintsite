import React, { useState } from "react";
import "./Post.css";

const Post = () => {
  const [posts, setPostes] = useState({});
  const HandalPostFrom = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/allpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(posts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("post success");
          e.target.reset();
        }
      });
  };
  const handalInputBlur = (e) => {
    const inputName = e.target.name;
    const Inputvalue = e.target.value;
    const newPostes = { ...posts };
    newPostes[inputName] = Inputvalue;
    setPostes(newPostes);
  };
  return (
    <div>
      <form onSubmit={HandalPostFrom}>
        <input
          onBlur={handalInputBlur}
          type="text"
          name="title"
          id=""
          placeholder="title"
        />
        <br />
        <input
          type="text"
          onBlur={handalInputBlur}
          name="catagory"
          id=""
          placeholder="catagory"
        />
        <br />
        <input
          type="text"
          onBlur={handalInputBlur}
          name="price"
          id=""
          placeholder="price"
        />
        <br />
        <input
          type="photoUrl"
          onBlur={handalInputBlur}
          name="img"
          id=""
          placeholder="photo url"
        />
        <br />
        <input
          type="text"
          onBlur={handalInputBlur}
          name="body"
          id=""
          placeholder="body"
        />
        <br />
        <button type="submit">Post Now</button>
      </form>
    </div>
  );
};

export default Post;
