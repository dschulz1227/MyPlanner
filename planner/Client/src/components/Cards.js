import React, {Component} from 'react';
import axios from 'axios';
import CreateTask from './CreateTask';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Container,
    Row,
    Col
} from 'reactstrap';
import Moment from 'react-moment';
export default class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'cards')
        this.state = {
            cards: []
        }
    }
    componentDidMount() {
        this.getCollection()
    }
    getCollection = () => {
        axios
            .get(`http://localhost:5000/api/tasks/getTasks/${this.props.user._id}`)
            .then(res => {
                // console.log('you will see me', res.data)
                console.log(res)
                this.setState({cards: res.data})
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
    deleteTask() {
        console.log('Delete Task Test')
        axios
            .delete('http://localhost:5000/api/tasks/delete/:id')
            .then(res => {
                alert('Task Deleted')
            })
    }
    getCollectionByCategory() {
        console.log('getbycategory test')
        axios
            .get(`http://localhost:5000/getCategoryName/${this.props.user._id}/:categoryName`)
            .then(res => {
                const categorizedTasks = res.data
                console.log(categorizedTasks)
            })
    }
    render() {
        return (
            <Container className="Tasks"
            //     style={{
            //     display: "flex",
            //     flexDirection: "row"
            // }}
            >
                {this
                    .state
                    .cards
                    .map((task, index) => {
                        return (
                            <div className="Tasks, col-md-12"  key={index}>
                                <Row>
                                    <Col>
                                    <Card
                                        body
                                        style={{
                                        display: "grid",
                                        justifyContent: "center",
                                        width: "400px",
                                        height: "fitContent",
                                        fontSize: "12px",
                                        color: "blue",
                                        margin: "10px",
                                        backgroundColor: "whitesmoke",
                                        borderRadius: "2px",
                                        lineHeight: "fitContent"
                                        
                                    }}>
                                        <CardTitle
                                            style={{
                                            color: "red",
                                            fontSize: "25px",
                                            justifyContent: "center",
                                            display: "flex"
                                        }}>
                                            {task.title}
                                        </CardTitle>

                                        <div>
                                            <h6>
                                                Category:
                                            </h6>
                                            <span>
                                                {task.category}
                                            </span>
                                            <h6>
                                                Task:
                                            </h6>
                                            <span>
                                                {task.content}
                                            </span>
                                            <h6>
                                                Date:
                                            </h6>
                                            <span>
                                                <Moment date={task.dateAdded}/>
                                            </span>
                                            <h6>
                                                Complete By:
                                            </h6>
                                            <span>
                                                <Moment date={task.completionDate}/>
                                            </span>
                                            <Row>
                                                <Col>
                                                    <button
                                                        type="boolean"
                                                        value={this.state.isCompleted}
                                                        onChange={this.handleChange}
                                                        placeholder="Completed"
                                                        onClick={this.markAsComplete}>
                                                        Mark Complete
                                                    </button>
                                                </Col>
                                                <Col>
                                                    <button
                                                        type="boolean"
                                                        value={this.state.isCompleted}
                                                        onChange={this.handleChange}
                                                        placeholder="Completed"
                                                        onClick={this.deleteTask}>
                                                        Delete Task
                                                    </button>
                                                </Col>
                                            </Row>

                                        </div>

                                    </Card>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })}
            </Container>
        )
    }
}