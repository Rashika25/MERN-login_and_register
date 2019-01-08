// import React from 'react';
// import '../App.css';
// import './signup.css';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn,  MDBModalFooter } from 'mdbreact';
// import Navigation from './Navigation';
//
// class signup extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//           first_name:'',
//             last_name:'',
//             email: '',
//             password: '',
//         };
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//
//     }
//
//     onChange(e) {
//         this.setState({[e.target.name]: e.target.value})
//
//     }
//
//     onSubmit(e) {
//
//         e.preventDefault()
//
//         const User = {
//
//             first_name: this.state.first_name,
//             last_name: this.state.last_name,
//             email: this.state.email,
//             password: this.state.password
//
//         }
//
//         register(user).then(res => {
//
//             if (res) {
//                 this.props.history.push('/signin')
//             }
//
//         })
//
//     }
//
//     render() {
//         return (
//             <MDBContainer>
//                 <MDBRow>
//                     <MDBCol md="6">
//                         <MDBCard>
//                             <MDBCardBody className="mx-4">
//                                 <div className="text-center">
//                                     <h3 className="dark-grey-text mb-5">
//                                         <strong> Sign Up </strong>
//                                     </h3>
//                                 </div>
//
//                                 <MDBInput
//                                     label="First Name"
//                                     icon="user"
//                                     group
//                                     type="text"
//                                     validate
//                                     error="wrong"
//                                     success="right"
//                                     value={this.state.first_name}
//                                     onChange={this.onChange}
//                                 />
//                                 <MDBInput
//                                     label="Last Name"
//                                     group
//                                     icon="user"
//                                     type="text"
//                                     validate
//                                     error="wrong"
//                                     success="right"
//                                     containerClass="mb-0"
//                                     value={this.state.last_name}
//                                     onChange={this.onChange}
//                                 />
//
//                                 <MDBInput
//                                     label="Your email"
//                                     group
//                                     icon="exclamation-triangle"
//                                     type="email"
//                                     validate
//                                     containerClass="mb-0"
//                                     error="wrong"
//                                     success="right"
//                                     value={this.state.email}
//                                     onChange={this.onChange}
//                                 />
//
//                                 <MDBInput
//                                     label="Your password"
//                                     group
//                                     icon="lock"
//                                     type="password"
//                                     validate
//                                     containerClass="mb-0"
//                                     value={this.state.password}
//                                     onChange={this.onChange}
//                                 />
//
//
//                                 <div className="text-center mb-3">
//                                     <MDBBtn
//                                         type="button"
//                                         gradient="blue"
//                                         rounded
//                                         className="btn-block z-depth-1a"
//                                     >
//
//                                         Sign Up
//                                     </MDBBtn>
//                                 </div>
//
//                                 <div className="row my-3 d-flex justify-content-center">
//
//                                 </div>
//                             </MDBCardBody>
//                             <div>
//                                 <MDBModalFooter className="mx-5 pt-3 mb-1">
//                                     <p className="font-small grey-text d-flex justify-content-end">
//
//                                         <a href="#!" className="blue-text ml-1">
//
//                                             <Navigation/>
//
//                                         </a>
//                                     </p>
//
//                                 </MDBModalFooter>
//                             </div>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         );
//     };
// };
// export default signup;