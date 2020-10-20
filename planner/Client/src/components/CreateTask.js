import axios from 'axios';
import React, {Component} from 'react';
import moment from 'moment'
import {
    Container,
    Label,
    Card,
    CardBody,
    Input,
    Form,
    CardTitle
} from 'reactstrap';
import Button from '@material-ui/core/Button';

class CreateTask extends Component {
    constructor(props) {
        super(props)
        console.log('createtask', props)
        this.state = {
            title: "",
            category: "Just Once",
            content: "",
            dateAdded: "",
            completionDate: "",
            userId: props.user._id,
            activeUser: props.user.name
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    /////////////////////////////////
    handleSubmit = async(event) => {
        event.preventDefault();
        const {
            title,
            category,
            content,
            dateAdded,
            completionDate,
            userId
        } = this.state
        console.log('testtest', moment(dateAdded).format('MM/DD/YYYY'))
        try {
            await axios.post('http://localhost:5000/api/tasks/create', {
                title: title,
                category: category,
                content: content,
                dateAdded: moment(dateAdded).format('MM/DD/YYYY'),
                completionDate: moment(completionDate).format('MM/DD/YYYY'),
                userId: userId
            })
            console.log('Task Created')
            alert('Task Created')
        } catch (e) {
            alert("something went wrong")
        }
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    };
    render() {
        return (
            <Container>
                <Card
                    style={{
                    width: "350px",
                    marginTop: "40px",
                    marginLeft:"auto",
                    marginRight:"auto",
                    fontFamily:"lato"
                }}>
                    <CardTitle style={{display:"flex", justifyContent:"center"}}>
                        Hello, {this.state.activeUser}!
                    </CardTitle>
                    <CardBody  style={{borderRadius:"15px"}}>
                        <Form style={{margin:"10px"}}>
                            <Label style={{fontWeight:"bolder"}}>Title</Label>
                            <Input 
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Task Title"/>
                            <Label style={{fontWeight:"bolder"}}>Category</Label>
                            <Input
                                type="select"
                                value={this.state.category}
                                name="category"
                                onChange={this.handleChange}>
                                <option value="Just Once">Just Once</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </Input>
                            <Label>Task</Label>
                            <Input
                                type="text"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                                placeholder="What is your task?"/>
                            <Label>Date Added</Label>
                            <Input
                                type="date"
                                name="dateAdded"
                                value={this.state.dateAdded}
                                onChange={this.handleChange}
                                placeholder="Today's Date"/>
                            <Label>Complete By</Label>
                            <Input
                                type="date"
                                name="completionDate"
                                value={this.state.completionDate}
                                onChange={this.handleChange}
                                placeholder="Date to complete"/>
                            <br/>
                            <div style={{justifyContent:"center" , display:"flex"}}>
                            <Button variant="contained" onClick={this.handleSubmit} type="button">Add Task
                            </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        );
    }
};
export default CreateTask;