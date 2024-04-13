import React from "react";

export default function Login({ formData }) {
  // Now you can access formData here and do whatever you want with it
  return (
    <div>
      <h2>FormData in Login Component:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
}
