import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../Context/useAuth';


const Register = () => {
    const {handleEmail, handlePassword, handleRegister, handleName} = useAuth();
    return (
        <div>
            <form onSubmit={handleRegister} className='bg-success p-5'>
               <input type='text' className='p-2 my-3 w-50' required placeholder='Enter Name' onBlur={handleName}/>
               <br/>
               <input type='email' className='p-2 my-3  w-50' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' className='p-2 my-3  w-50' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <input className='bg-danger px-3 py-2 text-white' type='submit' required value='Submit' />
               
           </form>

           <Link to='/login'><h3 className='text-danger py-3'>Already Have An Account? Login!!!</h3></Link>
            
        </div>
    );
};

export default Register;


// // import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
// import React, { useState } from 'react';
// // import { Grid } from '@mui/material';
// // import login from '../../../images/login.png'
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// // import useAuth from './../../../hooks/useAuth';

// const Register = () => {
//     const [loginData, setLoginData] = useState({});

//     const { user, registerUser, isLoading, authError } = useAuth();

//     const handleOnChange = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }
//     const handleLoginSubmit = e => {
//         if (loginData.password !== loginData.password2) {
//             alert('Your password did not match');
//             return
//         }
//         registerUser(loginData.email, loginData.password);
//         e.preventDefault();
//     }
//     return (
    
//             <>
//             <div className=" login w-25 m-auto p-3 mt-3 border rounded ">
//       <h2 className="  text-secondary mb-3">Please, Register here</h2>
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
    
//           placeholder=" Password"
//         />
//         <input
                           
//                            className="form-control mb-3"
 
//                            type="password"
//                            onChange={handleOnChange}
//                            placeholder=" Re-type Password"

//                            />
//         <input className="btn btn-info mb-3 mx-2" type="reset" defaultValue="Reset"/>
//         <input
//           className="btn btn-secondary mb-3"
//           type="submit"
//            value="Register"
        
//          />
//         {/* <Button type="submit" >Login</Button> */}
//       </form>
//       {/* <p>Or</p>
//       <p className="text-secondary">Sign in with</p>
//       <button onClick={googleSignIn} className="btn btn-success me-2">
//         Google
//       </button> */}
//       <p className="mt-3">
//     Already registered? <Link className="text-decoration-none" to="/login">Please login</Link>
//       </p>
//     </div>
                
//     </>
//   );
// };

              
//                     {/* <p>Register</p>
//                     {!isLoading && <form onSubmit={handleLoginSubmit}>
//                         <input
                           
//                             label="Your Email"
//                             name="email"
//                             type="email"
//                             onChange={handleOnChange}
//                             />
//                         <input
                           
//                             label="Your Password"
//                             type="password"
//                             name="password"
//                             onChange={handleOnChange}
//                             />
//                         <input
                           
//                             label="ReType Your Password"
//                             type="password"
//                             name="password2"
//                             onChange={handleOnChange}
//                             />

// <input
//           className="btn btn-secondary mb-3"
//           type="submit"
//            value="Register"
//             />
//     </form>}        */}
        
        
//             {/* <Link
//                             style={{ textDecoration: 'none' }}
//                             to="/login">
//                             Already Registered? Please Login
//                         <Link> */}
                        
                   
      
   

// export default Register;