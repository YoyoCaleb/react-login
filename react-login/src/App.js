// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";
import Success from "./components/success";
import { FormDataProvider } from "./FormDataContext"; // Import FormDataProvider

function App() {
  return (
    <Router>
      <FormDataProvider>
        {" "}
        {/* Wrap App with FormDataProvider */}
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;
