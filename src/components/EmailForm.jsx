import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setSuccess("");
    } else if (!isValidEmail(email)) {
      setError("Please provide a valid email");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Thank you for subscribing!");
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mb-4 md:mb-6">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="w-60 h-12 lg:w-[21.5rem] lg:h-[3.5rem] rounded-full placeholder:text-light-pink placeholder:opacity-50 px-6 py-3 border-2 border-light-pink"
        />
        <button className="w-16 h-12 lg:w-[6.25rem] lg:h-[3.5rem] bg-gradient-to-b from-pink to-dark-pink rounded-full cursor-pointer">
          <img src="/images/icon-arrow.svg" alt="icon" className="mx-auto" />
        </button>
      </div>
      {error && <img src="/images/icon-error.svg" className="ml-[18rem] mt-[-4rem]"/> && <div style={{ color: "red" }}>{error}</div>
      }
      {success && <div style={{ color: "green" }}>{success}</div>}
    </form>
  );
}

export default EmailForm;
