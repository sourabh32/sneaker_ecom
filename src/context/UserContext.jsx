import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

 export const userContext = createContext()

export const UserProvider = ({children}) =>{
    const [user,setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
        });
      
        return () => {
          unsubscribe();
        };
      }, []);

    return(
      <userContext.Provider value={user}>
        {children}
      </userContext.Provider>
    )
}