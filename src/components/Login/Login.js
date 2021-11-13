import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// const google_icon = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const location = useLocation();
    const history = useHistory(); 
    const redirect_uri = location?.state?.from || '/';
    const {handleEmail, handlePassword, handleLogin, handleGoogleLogin} = useAuth();
   


    const handleGoogleSignin = () =>{
        handleGoogleLogin()
        .then(result =>{
            history.push(redirect_uri);
        })
    }


    return (
        <div className='pb-5'>
           <form className='bg-success p-5'>
               <input type='email' className='p-2 my-3 w-50' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' className='p-2 my-3 w-50' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <button type='submit' className='btn btn-danger' onClick={handleLogin}>Submit</button>


               
           </form>

           <Link to='/register'><h3 className='mt-4 text-danger'>Don't Have An Account? Register Now!!! </h3></Link>

           
           <br/>
           <button className='btn btn-danger text-white' onClick={handleGoogleSignin}> Login With Google</button>



        </div>
    );
};

export default Login;




// import React, { useState } from 'react';

// import { Link, useLocation, useHistory } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// // import useAuth from './../../../hooks/useAuth';




// const Login = () => {
//     const [loginData, setLoginData] = useState({});
//     const { user, loginUser, isLoading, authError } = useAuth();

//     const location = useLocation();
//     const history = useHistory();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }
//     const handleLoginSubmit = e => {
//         loginUser(loginData.email, loginData.password, location, history);
//         // alert('Login successful')
//         e.preventDefault();
//     }
//     return(

    

// <div className=" login w-25 m-auto p-3 mt-3 border rounded ">
//       <h2 className="  text-secondary mb-3">Please, Log in</h2>
//       <div className="  text-danger" style={{ height: "50px" }}>
//         {authError}
//       </div>
//       <form onSubmit={handleLoginSubmit} className="">
//         <input
// onChange={handleOnChange}
//           className="form-control mb-3"
//           type="email"
//           placeholder="E-mail"
//         />
//         <input
//           onChange={handleOnChange}
//           className="form-control mb-3"
//           type="password"
    
//           placeholder="Password"
//         />
//         <input className="btn btn-info mb-3 mx-2" type="reset" defaultValue="Reset"/>
//         <input
//           className="btn btn-secondary mb-3"
//           type="submit"
//            value="Login"
        
//          />
//         {/* <Button type="submit" >Login</Button> */}
//       </form>
//       {/* <p>Or</p>
//       <p className="text-secondary">Sign in with</p>
//       <button onClick={googleSignIn} className="btn btn-success me-2">
//         Google
//       </button> */}
//       <p className="mt-3">
//         New user? <Link className="text-decoration-none" to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// // import React from "react";
// // import './Login.css'
// // import { Link} from "react-router-dom";
// // import useAuth from "../../hooks/useAuth";
// // // import useAuth from "../../Hooks/UseAuth";

// // const Login = () => {
// //   const {
// //     signInWithEmail,
// //     googleSignIn,
// //     userEmail,
// //     userPassword,
// //     error,
// //   } = useAuth();
 
  
// //   return (
// //     <div className=" login w-25 m-auto p-3 mt-3 border rounded ">
// //       <h2 className="  text-secondary mb-3">Please, Log in</h2>
// //       <div className="  text-danger" style={{ height: "50px" }}>
// //         {error}
// //       </div>
// //       <form className="">
// //         <input
// //           onChange={userEmail}
// //           className="form-control mb-3"
// //           type="email"
// //           name=""
// //           id=""
// //           placeholder="E-mail"
// //         />
// //         <input
// //           onChange={userPassword}
// //           className="form-control mb-3"
// //           type="password"
// //           name=""
// //           id=""
// //           placeholder="Password"
// //         />
// //         <input
// //           onClick={signInWithEmail}
// //           className="btn btn-secondary mb-3"
// //           type="submit"
// //           value="Login"
        
// //         />
// //         <input className="btn btn-info mb-3 mx-2" type="reset" defaultValue="Reset"/>
// //       </form>
// //       <p>Or</p>
// //       <p className="text-secondary">Sign in with</p>
// //       <button onClick={googleSignIn} className="btn btn-success me-2">
// //         Google
// //       </button>
// //       <p className="mt-3">
// //         New user? <Link className="text-decoration-none" to="/register">Register here</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;