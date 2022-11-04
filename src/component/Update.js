import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const { title, body, catagory, price, img, _id } = data;
  const [update, setUpdate] = useState(data);
  const handalUpsateFrom = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("your product successFully updated");
        }
      });
  };
  const handalInputBlur = (e) => {
    const inputName = e.target.name;
    const Inputvalue = e.target.value;
    const newPostes = { ...update };
    newPostes[inputName] = Inputvalue;
    setUpdate(newPostes);
  };
  return (
    <div>
      <h1 className="my-10 text-xl">this is update page {title} </h1>
      <div>
        <form onSubmit={handalUpsateFrom}>
          <input
            onChange={handalInputBlur}
            type="text"
            name="title"
            id=""
            defaultValue={title}
          />
          <br />
          <input
            type="text"
            onChange={handalInputBlur}
            name="catagory"
            id=""
            placeholder="catagory"
            defaultValue={catagory}
          />
          <br />
          <input
            type="text"
            onChange={handalInputBlur}
            name="price"
            id=""
            placeholder="price"
            defaultValue={price}
          />
          <br />
          <input
            type="photoUrl"
            onBlur={handalInputBlur}
            name="img"
            id=""
            placeholder="photo url"
            defaultValue={img}
          />
          <br />
          <input
            type="text"
            onChange={handalInputBlur}
            name="body"
            id=""
            placeholder="body"
            defaultValue={body}
          />
          <br />
          <button type="submit">update Now</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
