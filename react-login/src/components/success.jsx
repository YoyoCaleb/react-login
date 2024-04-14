// Success.jsx
import React from "react";
import { useFormData } from "../FormDataContext";

export default function Success() {
  const { formData } = useFormData();

  return (
    <div>
      <h2>Success Page</h2>
      <p>You have successfully logged in!</p>
      <h3>Registration Details:</h3>
      <p>Username: {formData.username}</p>
      <p>Password: {formData.password}</p>
      <p>Email: {formData.email}</p>
      <p>Major: {formData.major}</p>
      <p>Name: {formData.name}</p>
    </div>
  );
}
