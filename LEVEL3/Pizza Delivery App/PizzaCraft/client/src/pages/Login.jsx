import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://oibsip-webdev.onrender.com/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(res.data)
      );

      alert("Login Successful 🎉");

      window.location.href = "/dashboard";
    } catch (error) {
  console.log("LOGIN ERROR:", error);
  console.log("RESPONSE:", error.response?.data);

  alert(
    error.response?.data?.message ||
    error.message ||
    JSON.stringify(error.response?.data) ||
    "Login Failed"
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
            Welcome Back
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
            Sign In
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "/register")
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
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              color: "white",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "12px",
              marginBottom: "20px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              color: "white",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1e293b",
              color: "white",
              border: "none",
              borderRadius: "12px",
              marginBottom: "25px",
              boxSizing: "border-box",
            }}
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
            Sign In
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#94a3b8",
          }}
        >
          Don't have an account?
          <a
            href="/register"
            style={{
              color: "#ff7a30",
              marginLeft: "5px",
              textDecoration: "none",
            }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
