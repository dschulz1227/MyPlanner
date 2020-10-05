import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardTitle, Container, Row, Col} from 'reactstrap';
import Moment from 'react-moment';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';;

export default class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'cards')
        this.state = {
            cards: [],
            isCompleted: false
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

    deleteTask(taskId) {
        console.log(taskId, 'Check if the id we passed in is not undefined')
        console.log(this.props.userId, 'this is the userid')
        console.log(this.props, 'props data')
        axios
            .delete(`http://localhost:5000/api/tasks/delete/${this.props.user._id}/${taskId}`)
            .then(res => {
                const thisTask = (res.taskId)
                alert('Task deleteed')
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

    sortByCategory() {
        axios
            .get(`http://localhost:5000/getCategoryName/${this.props.user._id}/`)
            .then(res => {
                const categorizedTasks = res.data
                console.log(categorizedTasks)
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{justifyContent:"space-evenly"}} >
                    {this
                        .state
                        .cards
                        .map((task, index) => {
                            return (
                                <div className="col-md-4 col-lg-3 col-sm-12 mr-auto" key={index}>
                                    <Card
                                        style={{
                                        marginBottom: "5px",
                                        padding: "5px"
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
                                                    {/* <Button
                                                        type="boolean"
                                                        value={this.state.isCompleted}
                                                        onChange={this.handleChange}
                                                        placeholder="Completed"
                                                        onClick={this.markAsComplete}>
                                                        Mark Complete
                                                    </Button> */}
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        endIcon={< Icon > send </Icon>}
                                                        value={this.state.isCompleted}
                                                        onClick={this.markAsComplete}>
                                                        Completed
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        startIcon={< DeleteIcon />}
                                                        onClick={() => this.deleteTask(task._id)}>
                                                        Delete
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>

                                </div>
                            )
                        })}
                </div>
            </div>

        )
    }
}