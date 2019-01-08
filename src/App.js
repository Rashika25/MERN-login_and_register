import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter as Router,BrowserRouter,Switch} from 'react-router-dom';
//import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
// import  Signin from './Components/signin';
// import  Signup from './Components/signup';
// import  Error from './Components/error';
import NavBar from './Components/Navbar';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Landing from './Components/Landing';


class App extends Component {

  render(){

   return(
       <BrowserRouter>
          <div className="App">
               <NavBar/>

           <div className="container">
               <Route  path="/" component={Landing} exact />
               <Route path="/register" component={Register} exact/>
               <Route path="/login" component={Login} exact />
               <Route path="/profile" component={Profile} exact />
           </div>
          </div>
       </BrowserRouter>

  );
}
}

export default App;