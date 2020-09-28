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
    Option, CardTitle
} from 'reactstrap';

class CreateTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            category: "",
            content: "",
            dateAdded: "",
            completionDate: "",
            userId: "",
            activeUser: ""
        }

        this.handleSubmit = this
            .handleSubmit
            .bind(this);

    }

/////////////////////////////////


    handleSubmit = (event) => {

        const {title, category, content, dateAdded, completionDate} = this.state

        axios
            .post('http://localhost:5000/api/tasks/create', {

            title: title,
            category: category,
            content: content,
            dateAdded: dateAdded,
            completionDate: completionDate,
            userId: this.props.userId
        })
            .then(() => {
                console.log('Task Created')
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
                    <CardTitle>
                        Hello {this.activeUser}
                    </CardTitle>
                    <CardBody>
                        <button onClick={this.makeActiveUser}> COOL </button>
                        <Form>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Task Title"/>

                            <Label>Category</Label>

                            <Input type="select" defaultValue="" onChange={this.handleChange}>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
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

                            <Label>User Id</Label>
                            <Input
                                type="string"
                                name="userId"
                                value={this.state.userId}
                                onChange={this.handleChange}
                                placeholder="Need to change to auto"/>
                            <button onClick={this.handleSubmit}>Add Task
                            </button>

                            {/* <Input
                            type="boolean"
                            value={this.isCompleted}
                            onChange={this.handleChange}
                            placeholder="Completed"/>

                                <button onClick={this.markAsComplete}>
                                    Mark Complete
                                </button> */}

                        </Form>
                    </CardBody>
                </Card>
            </Container>
        );
    }
};

export default CreateTask;