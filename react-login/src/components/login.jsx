import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../FormDataContext";
import Send2FA from "../Send2FA";

export default function Login() {
  const [ranNum, setRanNum] = useState(null);
  useEffect(() => {
    // sends the inputed email into the Send2FA function to send the email
    const email = formData.email;
    const num = Send2FA(email);
    setRanNum(num);
  }, []);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    e2fa: "",
  });
  const [error, setError] = useState(null);
  const { formData } = useFormData();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const { username, password } = formData;

    // Check for the correct user/pass. Then 2FA
    if (
      credentials.username === username &&
      credentials.password === password
    ) {
      if (credentials.e2fa === ranNum.toString()) {
        navigate("/success");
      } else {
        setError("Invalid 2FA. Please try again.");
      }
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <label htmlFor="e2fa">2FA:</label>
        <input
          type="text"
          id="e2fa"
          name="e2fa"
          value={credentials.e2fa}
          onChange={handleChange}
        />
        <p>{ranNum}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
