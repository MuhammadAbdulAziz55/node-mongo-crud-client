import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("User added successfully");
        }
        event.target.reset();
      })
      .catch((err) => console.error(err));
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    // console.log("newUser", newUser);
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please add a user</h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="Enter your address"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="Enter your eamil"
        />
        <button type="submit ">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
