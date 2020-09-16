import axios from 'axios';
import React, {Component} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

class TaskCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            category: "",
            content: "",
            dateAdded: "",
            completionDate: "",
            dateDeleted: ""
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);

    }

    handleSubmit = (event) => {

        const {
            title,
            category,
            content,
            dateAdded,
            completionDate,
            dateDeleted
        } = this.state

        axios
            .post('http://localhost:5000/api/tasks/create', {
            title: title,
            category: category,
            content: content,
            dateAdded: this.date,
            completionDate: this.date,
            dateDeleted: this.date
        })
            .then(response => {
                alert('Task Created')
            })

    }
    render() {

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="/assets/318x180.svg" alt="Card image cap"/>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the
                            bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default TaskCard;