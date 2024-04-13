import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Send2FA.css";

const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_u17g2mm";
    const templateId = "template_19rjfp9";
    const publicKey = "DpTbUhjJ5CiC9YQLc";

    // Create a new object that contains dynamic template params
    const templateParams = {
      randomnumber: generateRandomNumber(),
    };

    function generateRandomNumber() {
      // Generate a random number between 1000000000 (inclusive) and 9999999999 (exclusive)
      return Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
    }

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
