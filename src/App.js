// import logo from './logo.svg';
import './App.css';
import React from "react";

  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import MenuBar from './components/Shared/MenuBar/MenuBar';
import Explore from './components/Explore/Explore'
// import PlaceOder from './components/PlaceOder/PlaceOder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Purchase from './components/Purchase/Purchase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Router>
          <MenuBar></MenuBar>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
                <Explore></Explore>
                </Route>
                
             <Route path="/login">
              <Login></Login>
              </Route>
              <Route path="/register">
              <Register></Register>
              </Route>
              <PrivateRoute exact path='/purchase/:id'>
            <Purchase></Purchase>
            <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>

          </PrivateRoute>

          </PrivateRoute>
             <Route path="*">
           <NotFound></NotFound>
            </Route>
          
            
                {/* <Route path="/addService">
                <AddService
                ></AddService>
                </Route>
                <Route path="/manageOders">
                <ManageAllOders></ManageAllOders>
                </Route>  */}
            

           
    
          </Switch>
          <Footer></Footer>
        </Router>
        
       </AuthProvider>
    </div>
  );
}

export default App;
