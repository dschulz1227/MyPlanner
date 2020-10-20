import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardTitle, Row, Col} from 'reactstrap';
import MyMenu from './Menu'

//css component imports
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

////////////

export default class Cards extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'cards')
        this.state = {
            cards: [],
            isCompleted: false,
            category: '',
            selected: '',
            anchorEl: null
        }
    }

    componentDidMount() {
        console.log(this.state.cards)
        this.getCollection('All')
    }

    //get entire collection
    getCollection = (name) => {
        console.log('yeay it works', name)

        axios
            .get(`http://localhost:5000/api/tasks/getTasks/${this.props.user._id}/category/${name}`)
            .then(res => {
                // console.log('you will see me', res.data)
                console.log('card details', res)
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
                alert(thisTask + 'Task deleteed') //The deleted taskId is coming back as undefined
            })
    }

    //Set category to search by
    handleChange = (value) => {
        this.setState({category: value});
    }

    //dropdown menu functions
    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    }

    //Category options to be displayed

    render() {
        return (
            <div className="container-fluid">
                <div
                    className="row"
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "45px",
                    marginLeft: "15px",
                    marginRight: "15px"
                }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{
                        marginLeft: "15px",
                        marginRight: "15px"
                    }}
                        onClick={() => this.getCollection('All')}
                        value={this.state.cards}>Display All</Button>
                    <MyMenu getCollection={this.getCollection}/>
                </div>
                <div
                    className="row"
                    style={{
                    justifyContent: "space-evenly"
                }}>
                    {this
                        .state
                        .cards
                        .map((task, index) => {
                            return (
                                <div
                                    className="col-md-4 col-lg-3 col-sm-12 mr-auto"
                                    key={index}
                                    style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    display: "grid",
                                    fontWeight: "lighter",
                                    padding:"20px"
                                }}>
                                    <Card
                                        style={{
                                        marginBottom: "5px",
                                        padding: "10px",
                                        display:"grid",
                                        justifyContent:"center"
                                    }}>
                                        <CardTitle
                                            style={{
                                            color: "black",
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            justifyContent: "center",
                                            display: "flex"
                                        }}>
                                            {task.title}
                                        </CardTitle>

                                        <div
                                            style={{
                                            display: "grid",
                                            justifyContent: "center"
                                        }}>
                                            <div>
                                                <strong>
                                                    Category:
                                                </strong>
                                            </div>
                                            <div>
                                                <span>
                                                    {task.category}
                                                </span>
                                            </div>
                                            <div>
                                                <strong>
                                                    Task:
                                                </strong>
                                            </div>
                                            <div>
                                                <span>
                                                    {task.content}
                                                </span>
                                            </div>
                                            <div>
                                                <strong>
                                                    Date:
                                                </strong>
                                            </div>
                                            <div>
                                                <span>
                                                    <div>
                                                        {task
                                                            .dateAdded
                                                            .toString()}</div>
                                                </span>
                                            </div>
                                            <div>
                                                <strong>
                                                    Complete By:
                                                </strong>
                                                <span>
                                                    <div>{task
                                                            .completionDate
                                                            .toString()}</div>
                                                </span>
                                            </div>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        startIcon={< CreateOutlinedIcon />}
                                                        value={this.state.isCompleted}
                                                        onClick={this.markAsComplete}>
                                                        Completed
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="secondary"
                                                        startIcon={< DeleteIcon />}
                                                        onClick={() => this.deleteTask(task._id)}>
                                                        Delete
                                                    </Button>
                                                </Col>
                                                <Col
                                                    style={{
                                                    display: "grid",
                                                    justifyContent: "center",
                                                    marginTop: "5px"
                                                }}>
                                                    <Button color="primary">
                                                        Edit Task
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
