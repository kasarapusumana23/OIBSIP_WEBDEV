import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      await axios.post(
        "https://oibsip-webdev.onrender.com/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(
        "Registration Successful 🎉"
      );

      window.location.href = "/login";
    } catch (error) {
  console.log("REGISTER ERROR:", error);
  console.log("RESPONSE:", error.response?.data);

  alert(
    error.response?.data?.message ||
    error.message ||
    JSON.stringify(error.response?.data) ||
    "Registration Failed"
  );
}
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#020817",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          backgroundColor: "#0f172a",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
          boxShadow:
            "0 0 25px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#ff7a30",
              fontSize: "34px",
              marginBottom: "10px",
            }}
          >
            🍕 PizzaCraft
          </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Create Account
          </p>
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "#1e293b",
            borderRadius: "12px",
            padding: "4px",
            marginBottom: "25px",
          }}
        >
          <button
            onClick={() =>
              (window.location.href =
                "/login")
            }
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              background: "transparent",
              color: "#94a3b8",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>

          <button
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#0f172a",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#ff7a30",
              color: "white",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#1e293b",
  color: "white",
  border: "none",
  borderRadius: "12px",
  marginBottom: "15px",
  boxSizing: "border-box",
};

export default Register;
