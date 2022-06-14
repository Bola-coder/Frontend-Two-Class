import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
      <br /> <br />
      <div>
        <p>Name: {name}</p>
        <p>EMail: {email}</p>
        <p>Password: {password}</p>
      </div>
    </section>
  );
};

export default Form;
