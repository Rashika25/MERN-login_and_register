// import React,{Component} from 'react';
// import '../App.css';
// import './signin.css';
// import Navigation1 from './navigation1';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn,  MDBModalFooter } from 'mdbreact';
//
//
// class signin extends Component {
//
//     constructor() {
//         super()
//         this.state = {
//             name: '',
//             password: '',
//         }
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
//             name: this.state.name,
//             password: this.state.password
//
//         }
//
//         login(user).then(res => {
//
//             if (res) {
//                 this.props.history.push('/navbar')
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
//                       <form noValidate onSubmit={this.onSubmit}>
//                         <MDBCard>
//                             <MDBCardBody className="mx-4">
//                                 <div className="text-center">
//                                     <h3 className="dark-grey-text mb-5">
//                                         <strong>Sign in</strong>
//                                     </h3>
//                                 </div>
//                                 <MDBInput
//                                     label="Your name"
//                                     icon="user"
//                                     group
//                                     type="text"
//                                     validate
//                                     error="wrong"
//                                     success="right"
//                                     value={this.state.name}
//                                     onChange={this.onChange}
//                                 />
//                                 <MDBInput
//                                     label="Your password"
//                                     icon="lock"
//                                     group
//                                     type="password"
//                                     validate
//                                     error="wrong"
//                                     success="right"
//                                     containerClass="mb-0"
//                                     value={this.state.password}
//                                     onChange={this.onChange}
//                                 />
//
//                                 <div className="text-center mb-3">
//                                     <MDBBtn
//                                         type="submit"
//                                         gradient="blue"
//                                         rounded
//                                         className="btn-block z-depth-1a"
//                                     >
//                                         Sign in
//                                     </MDBBtn>
//                                 </div>
//
//                                 <div className="row my-3 d-flex justify-content-center">
//
//                                 </div>
//                             </MDBCardBody>
//                             <MDBModalFooter className="mx-5 pt-3 mb-1">
//                                 <p className="font-small grey-text d-flex justify-content-end">
//                                     Not a member?
//
//                                     <Navigation1/>
//
//                                 </p>
//                             </MDBModalFooter>
//                         </MDBCard>
//                       </form>
//                     </MDBCol>
//
//                 </MDBRow>
//             </MDBContainer>
//         );
//     };
//
// }
//  export default signin;