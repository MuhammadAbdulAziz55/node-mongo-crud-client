import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState({ storedUser });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User updated successfully");
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    // console.log("newUser", newUser);
    setUser(newUser);
  };

  return (
    <div>
      <h3>Update User: {storedUser.name}</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Enter your name"
          defaultValue={storedUser.name}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          placeholder="Enter your address"
          defaultValue={storedUser.address}
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="Enter your eamil"
          defaultValue={storedUser.email}
        />
        <button type="submit ">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
