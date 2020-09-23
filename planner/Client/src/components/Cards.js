import React, {Component} from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import {Card, CardBody, CardTitle, CardText, Container, Row, Col} from 'reactstrap';
import Moment from 'react-moment';
import 'moment-timezone';

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

    getCollectionByCategory(){
        console.log('getbycategory test')
        axios.get("http://localhost:5000/getCategoryName/:userId/:categoryName")
        .then (res => {
            const categorizedTasks = res.data
            console.log(categorizedTasks)
        })
    }




    render() {
        return (

            <Container
                style={{
                display: "flex",
                flexDirection: "row"
            }}>
                {this
                    .state
                    .cards
                    .map((task, index) => {
                        return (
                            <div>
                                {/* <Grid container direction="row" justify="center" alignItems="center"> */}
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
                                    borderRadius: "2px"
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
                                    <CardText>
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


                                           
                                    </CardText>
                                </Card>
                            </div>

                        )
                    })}
            </Container>
        )
    }
}