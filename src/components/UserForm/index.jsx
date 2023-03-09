import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setMessageError("");

    if (!name) {
      setNameError("Name is required");
    }

    if (!email) {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    }

    if (!message) {
      setMessageError("Message is required");
    }

    if (name && email && validateEmail(email) && message) {
      toast.success("Thank you for your response");
      setName("");
      setEmail("");
      setMessage("");
      // add code to submit form data here
    }
  };

  return (
    <form className="flex flex-col space-y-7" onSubmit={handleSubmit}>
      <label className="text-white text-xl">Name:</label>
      <input
        type="text"
        placeholder="Enter your name."
        className="w-full h-[55px] p-6 rounded-full mt-5"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {nameError && <p className="text-red-700">{nameError}</p>}
      <label className="text-white text-xl">Email:</label>
      <input
        type="text"
        placeholder="abcd@gmail.com"
        className="w-full h-[55px] p-6 rounded-full mt-5"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {emailError && <p className="text-red-700">{emailError}</p>}
      <label className="text-white text-xl">Message:</label>
      <textarea
        type="text"
        placeholder="Your Message :)"
        className="w-full h-[185px] p-6 rounded-3xl resize-none mt-5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {messageError && <p className=" text-red-700">{messageError}</p>}
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-12 flex-wrap">
        <button
          type="submit"
          className="text-white text-xl bg-primary px-10 py-[10px] rounded-2xl hover:text-primary hover:bg-white transition ease-in-out delay-150 hover:-translate-y-.5 hover:scale-110 duration-300"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="text-white text-xl bg-light-back px-10 py-[10px] rounded-2xl hover:text-primary hover:bg-white transition ease-in-out delay-150 hover:-translate-y-.5 hover:scale-110 duration-300"
        >
          Clear
        </button>
        <ToastContainer />
      </div>
    </form>
  );
};

export default index;
