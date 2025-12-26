import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
  const provider = new GoogleAuthProvider();
  import {auth} from '../../Firebase/Firebase.init';

const Login = () => {
      const [user,setUser]=useState(null);
      const handleProviderLogin=()=>{
            signInWithPopup(auth,provider)
            .then(result=>{
                  console.log(result.user);
                  setUser(result.user)
            })
            .catch(error=>{
                  console.log(error);
            })
      }
      const handlesignOut=()=>{
            signOut(auth).
            then(()=>{
                  console.log("Sign out Done")
                  setUser(null);
            })
      }
    
      return (
            <div>
                <h3>This is Login</h3>  
               
                
                {
                  user ? 
                  
                   <button onClick={handlesignOut}>SIgn out</button>
                  : <button onClick={handleProviderLogin}>Sign In With Google</button>
                }
                <div>
                  <h2>{user?.displayName}</h2>
                  <h4>{user?.email}</h4>
                  <img src={user?.photoURL}alt="" />
                </div>
            </div>
            
      );
};

export default Login;