import React, {Component} from 'react';
import axios from 'axios';
import {
    Card,
    CardTitle,
    Container,
    Row,
    Col,
    Input
} from 'reactstrap';
import Moment from 'react-moment';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'

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
        this.handleChange = this
            .handleChange
            .bind(this);
        this.renderOptions = this
            .renderOptions
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);

    }

    componentDidMount() {
        alert('Here are your tasks')
    }

    //get entire collection
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

    getCollectionByCategory(category) {
        console.log('getbycategory test')
        axios
            .get(`http://localhost:5000/getCategoryName/${this.props.user._id}/${this.state.category}`)
            .then(res => {
                const categorizedTasks = res.data
                console.log(categorizedTasks)
                this.setState({cards: categorizedTasks})
            })
    }

    //Set category to search by
    handleChange(value) {
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

    renderOptions = () => {
        return this
            .state
            .cards
            .map((category, i) => {
                return (
                    <div key={i}>
                        <MenuItem value={'JustOnce'} primaryText={'JustOnce'} Just once/>
                        <MenuItem value={'Daily'} primaryText={'Daily'}/>
                        <MenuItem value={'Weekly'} primaryText={'Weekly'}/>
                        <MenuItem value={'Monthly'} primaryText={'Monthly'}/>
                    </div>
                );
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <Button onClick={this.getCollection}>Display All</Button>

                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}>
                    Open Menu
                </Button>

                <div>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
> 
                        {this.renderOptions}

                    </Menu>
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
                                    alignItems: "center"
                                }}>
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
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sendicon={< sendIcon />}
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
