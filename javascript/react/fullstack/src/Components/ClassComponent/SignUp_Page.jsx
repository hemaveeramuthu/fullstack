import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Ensure proper import

const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Move useNavigate here, at the top of the component

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    axios
      .post("http://localhost:3001/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Sign-up successful", response);
        // Redirect to login page after successful signup
        navigate("/login");
      })
      .catch((error) => {
        console.error("There was an error signing up!", error);
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Sign Up</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px",
  },
  label: {
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SignUpPage;
