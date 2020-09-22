import axios from 'axios';
import React, {Component} from 'react';
import {
    Container,
    Label,
    Card,
    CardText,
    CardBody,
    CardLink,
    Input,
    Form,
    SelectOption,
    Select,
    Option
} from 'reactstrap';

class TaskCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            category: "",
            content: "",
            dateAdded: "",
            completionDate: ""
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);

    }

    handleSubmit = (event) => {

        const {title, category, content, dateAdded, completionDate} = this.state

        axios
            .post('http://localhost:5000/api/tasks/create', {

            title: title,
            category: category,
            content: content,
            dateAdded: this.date,
            completionDate: this.date
        })
            .then(() => {
                alert('Task Created')
            })

    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
    };

    render() {

        return (
            <Container>
                <Card>
                    <CardBody>
                        <Form>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Task Title"/>
                            
                            <Label>Category</Label>
                            <Input
                                type="select"
                                defaultValue=""
                                placeholder="--"
                                onChange={this.handleChange}>
                                <option>Cat 1</option>
                                <option>Cat 2</option>
                                <option>Cat 3</option>
                                <option>Cat 4</option>
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
                            <button onClick={this.handleSubmit} >Add Task
                            </button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        );
    }
};

export default TaskCard;