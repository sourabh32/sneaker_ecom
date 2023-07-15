import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInGoogle,signIn, logOut } from "./firebaseFunctions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogle = async () => {
    
    setError(null);
    try {
      await signInGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleLogOut = async () =>{
    try {
        await logOut()
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
        <button type="Submit">Log In</button>
      </form>
      <button onClick={handleGoogle}>google</button>

      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      <button onClick={handleLogOut}>log Out</button>
    </div>
  );
};

export default SignIn;