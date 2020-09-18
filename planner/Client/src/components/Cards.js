import React, {Component} from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default class Cards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        this.getCollection()
    }

    getCollection = () => {
        axios
            .get('http://localhost:5000/api/tasks/getTasks/5f596b15061a8a5d4bed46a7')
            .then(res => {
                console.log('you will see me', res.data)
                this.setState({cards: res.data})
                // console.log({cards}) if (this.cards === null) {     console.log("No Tasks") }
            })
    }

    goToCarddetails = (userId, collectionCount) => {
        if (!collectionCount) {
            alert('No collections');
            return;
        }

        this
            .props
            .history
            .push('/Task', {userId: userId})
    }

    render() {
        return (

            <div>
                {this
                    .state
                    .cards
                    .map((task, index) => {
                        return (
                            <Card>
                                <CardBody>
                                    <p>{task.category}</p>
                                    <p>{task.content}</p>
                                </CardBody>
                            </Card>

                        )

                    })}
            </div>
        )
    }
}