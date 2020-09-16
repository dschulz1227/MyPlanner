// import React from 'react';
// import useForm from './useForm';
// import {Container, Col, Row, Button, Form, Label, Input} from 'reactstrap';

// const RegisterForm = () => {
//     const { values, handleChange, handleSubmit } = useForm(register);
    

//     function register(){
//         alert(`Thanks for registering! Check your email ${values.email} for confirmation`);
//     }

//     return (
//         <Container fluid>
//         <Row>
//         <Form id="register-form" onSubmit={handleSubmit}>
//             <Label>
//                 Email:
//                 <Input 
//                     type="email" 
//                     name="email" 
//                     onChange={handleChange} 
//                     value={values.email} 
//                     required={true} 
//                 />
//             </Label>
//             <Label>
//                 Password:
//                 <Input 
//                     type="password" 
//                     name="password" 
//                     onChange={handleChange} 
//                     value={values.password} 
//                     required={true} 
//                 />
//             </Label>
//             <Button color="primary" type="submit">Register</Button>
//         </Form>
//         </Row>
//         </Container>
//     );
// };

// export default RegisterForm;
import React, {Component} from 'react';
import Axios from 'axios';


export default class RegistrationForm extends Component {
    constructor(props)  {
        super(props);

            this.state = {
                email: "",
                firstName: "",
                lastName: "",
                password: ""
            }
        
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
            this.setState({
            [event.target.name]: event.target.value   
            });
        }
        handleSubmit(event){
            event.preventDefault();
            const {email, password, firstName, lastName} = this.state

            Axios.post(`http://localhost:5000/api/users/`,
                {
                    
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        password: password
                        
                }

            ) 
            .then(response => {
                alert('registered')
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                  }
            })
            .catch(error =>{
                console.log("Registration error, you may not see the high council", error);

            });

        }

    render() {
        return (
            <div className = "registerWrap">
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <h5>New Bounty Hunter Registration</h5>
                    </div>
                    <div>
                        <input type="text" name="firstName" placeholder="Enter your first name" value= {this.state.firstName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="text" name="lastName" placeholder="Enter your last name" value= {this.state.lastName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Enter your email" value= {this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Create an Access Code" value= {this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <div>
                            <span>
                                 <button className ="submit" type = "submit">Generate</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
