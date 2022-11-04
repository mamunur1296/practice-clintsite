import React, { useState } from "react";
import "./Post.css";

const Post = () => {
  const [posts, setPostes] = useState({});
  const HandalPostFrom = (e) => {
    e.preventDefault();
    console.log(posts);
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
          type="text"
          onBlur={handalInputBlur}
          name="body"
          id=""
          placeholder="body"
        />
        <br />
        <button type="submit">Post Now</button>
        <button type="submit">Edit </button>
        <button type="submit">Delit</button>
      </form>
    </div>
  );
};

export default Post;
