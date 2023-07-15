import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signUp } from "./firebaseFunctions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
 
  const handleSubmit  = async (e) =>{
    e.preventDefault()
    setError(null)
    try {
      await signUp(email,password);
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div>
      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Sign Up</button>
      </form>
      <div>
        have an account? <Link to="/">Sign in</Link>
      </div>
    </div>
  );
};

export default SignUp;
