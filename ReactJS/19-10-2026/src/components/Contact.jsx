import React from "react";
import { useState } from "react";
import { profile } from "../data";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  const [send, setSend] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const err = {};

    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      err.message = "Write at least 10 characteres.";
    setError(err)
    if (Object.keys(err).length === 0) {
      console.log("Form Data:", form);
      setSend(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section>
      <div>
        <h2>Contact</h2>
        <p>
          Have a Project in mind? Write to{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
      <form onSubmit={submit} noValidate>
        {send && <p>Message send. I will reply soon.</p>}
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={form.name}
            onChange={change}
          />
          {error.name && <small>{error.name}</small>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id=""
            value={form.email}
            onChange={change}
          />
          {error.email && <small>{error.email}</small>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={change}
          ></textarea>
          {error.message && <small>{error.message}</small>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
