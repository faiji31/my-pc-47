import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  const provider = new GoogleAuthProvider();
  import {auth} from '../../Firebase/Firebase.init';

const Login = () => {
      const handleProviderLogin=()=>{
            signInWithPopup(auth,provider)
            .then(result=>{
                  console.log(result.user);
            })
            .catch(error=>{
                  console.log(error);
            })
      }
    
      return (
            <div>
                <h3>This is Login</h3>  
                <button onClick={handleProviderLogin}>Sign In With Google</button>
            </div>
      );
};

export default Login;