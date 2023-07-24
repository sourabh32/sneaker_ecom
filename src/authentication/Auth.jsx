import React, { useContext } from "react";
import "./auth.css"
import {signInGoogle,signInGitHub,logOut} from "../firebaseFunctions"
import { userContext } from "../context/UserContext";
const Auth = () => {
 const user = useContext(userContext)
 console.log(user)
  const handleGoogle = async ()=>{
try{
 const user =  await signInGoogle()
 console.log(user)
}
catch (error){
  console.log(error)
}
  }
  const handleSignOut = async ()=>{
    try{
       await logOut()
     
    }
    catch (error){
      console.log(error)
    }
      }
      const handleGitHub = async ()=>{
        try{
         const user =  await signInGitHub()
         console.log(user)
        }
        catch (error){
          console.log(error)
        }
          }
  return (
    <div className="body">
      <div className="auth-container">
        <h2>Welcome!</h2>
        
        { user ? (<>
        <p>{user.email}</p>
        <img src={user.photoURL} style={{width:"20px",height:"20px"}}/>
         <button onClick={handleSignOut} className="auth-button signout">Sign Out</button></>):(<>
          <p>Please sign in to continue.</p>
         <button onClick={handleGoogle} className="auth-button google">Sign in with Google</button>
        <button onClick={handleGitHub} className="auth-button github">Sign in with GitHub</button></>)}
        
       
      </div>
    </div>
  );
};

export default Auth;
