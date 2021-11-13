
// import initializeFiree from "../FIrebase/firebase.init"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";





// initializeFirebase();
initializeFirebase()

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();



const useFirebase = () =>{

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [user,setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [admin, setAdmin] = useState({});

    //  useEffect(()=>{
    //    fetch(`http://localhost:5000/checkAdmin/${user.email}`)
    //    .then(res =>res.json())
    //    .then(data =>setAdmin(data))
    //  },[user.email])

    //  console.log(admin);

  

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }     

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleLogin = (e) =>{
      setIsLoading(true);
        e.preventDefault();
        // console.log(email, password);
         return signInWithEmailAndPassword(auth, email, password)
        .then(result => {
    //   console.log(result.user);

    
  })
  .finally(()=>setIsLoading(false))
    }

    const handleRegister = (e) =>{
      setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    //   console.log(result.user);
    
  })
  .finally(()=>setIsLoading(false))
        addUserToDatabase(email,password,name);

        

    }

    const handleGoogleLogin = () =>{
      setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
  .then(result => {
    //   console.log(result.user);
    addGoogleUserToDatabase(result?.user?.email, result?.user?.displayName);
    
  })
  .finally(()=> setIsLoading(false));





    }

    const addGoogleUserToDatabase = (mail,displayName) =>{
      // console.log(mail,displayName);

      const googleUser ={
        displayName: displayName,
        email: mail
      };

      fetch('http://localhost:5000/googleUser',{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(googleUser)

      })

    }

   



    const addUserToDatabase = (mail, pass)=>{
       const userInfo ={
           displayName: name,
           email: mail,
           password: pass
       };

       fetch('http://localhost:5000/addUser',{
           method: 'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(userInfo)
       })
       .then(res => res.json())
       .then(data => console.log(data));

       

    }


    const handleLogOut = () =>{
      setIsLoading(true);
      signOut(auth).then(() => {
        setUser({})
      })
      .finally(()=>setIsLoading(false))

    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
        setIsLoading(false);
      });


   
    //   return{handleEmail, handlePassword, handleLogin, handleRegister, handleName, user, handleLogOut, isLoading }


    return{handleEmail, handlePassword, handleLogin, handleRegister, handleName, handleGoogleLogin, user, handleLogOut, isLoading, admin }


}

export default useFirebase;






// // import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
// // import 

// import { useState, useEffect } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// import initializeFirebase from '../Firebase/firebase.init';


// // initialize firebase app
// initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [authError, setAuthError] = useState('');

//     const auth = getAuth();

//     const registerUser = (email, password) => {
//         setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//                 console.log(error);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     const loginUser = (email, password, location, history) => {
//         setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const destination = location?.state?.from || '/';
//                 history.replace(destination);
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//             })
//             .finally(() => setIsLoading(false));
//     }

//     // observer user state
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [])

//     const logout = () => {
//         setIsLoading(true);
//         signOut(auth).then(() => {
//             // Sign-out successful.
//         }).catch((error) => {
//             // An error happened.
//         })
//             .finally(() => setIsLoading(false));
//     }

//     return {
//         user,
//         isLoading,
//         authError,
//         registerUser,
//         loginUser,
//         logout,
//     }
// }

// export default useFirebase;