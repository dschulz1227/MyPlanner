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
                name: "",
                email: "",
                password: ""
            }
        
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        //handle User input

        handleChange(event){
            this.setState({
            [event.target.name]: event.target.value   
            });
        }

        //submit form/add user

        handleSubmit(event){
            event.preventDefault();
            const {email, password, name} = this.state
 
            Axios.post(`http://localhost:5000/api/users/`,
                {
                        name: name,
                        email: email,
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
                console.log("Registration error", error);

            });

        }





    render() {
        return (
            <div className = "registerWrap">
                <form >
                    {/* onSubmit = {this.handleSubmit}> */}
                    <div>
                        <h5>New User</h5>
                    </div>

                    <div>
                        <input type="text" name="name" placeholder="Enter your name" value= {this.state.name} onChange={this.handleChange} required/>
                    </div>

                    <div>
                        <input type="text" name="email" placeholder="Enter your email" value= {this.state.email} onChange={this.handleChange} required/>
                    </div>

                    <div>
                        <input type="text" name="password" placeholder="New password" value= {this.state.password} onChange={this.handleChange} required/>
                    </div>

                    <div>
                        
                            <span>
                                 <button onClick={this.handleSubmit} className ="submit" type = "submit">Create</button>
                            </span>
                        
                    </div>
                </form>
            </div>
        )
    }

}
