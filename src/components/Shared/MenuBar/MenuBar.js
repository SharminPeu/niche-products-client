// import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// // import brand_logo from '../../images/brand_logo.png'


// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// // const user_icon = <FontAwesomeIcon icon={faUser} />

// const MenuBar = () => {
//   const {user, handleLogOut} = useAuth();
//     return (
     
           
//         <>
        
//         <Navbar bg="dark" variant="dark" sticky="top"  collapseOnSelect expand="lg">
//           <Container>
//           <Navbar.Brand as={Link} to="/"><img
//         src=".."
//         width="250"
//         height="70"
//         className="d-inline-block align-top"
//         alt="Timzee Brand Logo"
//       /></Navbar.Brand>
         
//           <Navbar.Toggle />
//     <Navbar.Collapse className="justify-content-end" >
   
//     <Nav.Link as={Link} className='text-white' to="/home">Home</Nav.Link>
//     <Nav.Link as={Link} className='text-white' to="/allProducts">Explore</Nav.Link>
//     {
//       user.email && 
//       <>
//       <Nav.Link as={Link} className='text-white' to="/dashboard">Dashboard</Nav.Link>
//       <button className='btn btn-danger' onClick={handleLogOut}>Logout {user?.email}</button>
    
//       </>
//     }

//     {
//       !user.email && 
//       <NavDropdown title="All" >
//       <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
//       <NavDropdown.Item as={Link} to='/register'>Register</NavDropdown.Item>
      
//     </NavDropdown>
//     }
  
   
   
    


//     </Navbar.Collapse>
          
//           </Container>
//         </Navbar>
        
//       </>



            
        
//     );
// };

// export default MenuBar;


import React from 'react';
// import './Menubar.css'
import './MenuBar.css'
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../../hooks/useAuth';


//set  all options in menubar
const MenuBar = () => {
    // const { user, logout } = useAuth();
      const {user, handleLogOut} = useAuth();

    return (
        <div className="container menubar-container mt-3 mb-2">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex justify-content-center  ">
                    <span className="navbar-brand text-white  fw-bold ms-2" >TourHub</span>
                </div>
                <div className="collapse navbar-collapse  d-flex align-items-end justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Link to="/home" className="items text-white fw-bold">
                            <li>Home</li>
                        </Link>

                        <Link to="/explore" className="items text-white fw-bold">
                            <li>Explore</li>
                        </Link>
                        {   user.email && 
      <>
      <Link  className='text-white' to="/dashboard">Dashboard</Link>
      <button className='btn btn-danger' onClick={handleLogOut}>Logout {user?.email}</button>
    
      </>     }
      {
    !user.email && 
    <>
       <Link to='/login'>Login</Link>
       <Link to='/register'>Register</Link>
       </>
      
   }
                        {/* {user.email &&

                            <Link to="/myOders" className="items text-white fw-bold">
                                <li>My Oders</li>
                            </Link>}
                        {user.email &&
                            <Link to="/addService" className="items text-white fw-bold">
                                <li>Add Packages</li>
                            </Link>
                        }
                        {
                            user.email &&
                            <Link to="/manageOders" className="items text-white fw-bold">
                                <li>Manage All Oders</li>
                            </Link>

                        }*/}
                        {/* {user.email && <span className="fw-bold mt-2" style={{ color: 'lightblue' }}>{user.displayName} </span>}

                        {user.email ?

                            <button className=" mx-2 border-0 btn btn-light" onClick={logout}>Log Out </button>
                            : */}
                            <Link to="/login" className="items text-white fw-bold">
                                <li>Login</li>
                            </Link>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default MenuBar;