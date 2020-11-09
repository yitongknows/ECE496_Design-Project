import React, {Component} from 'react';
import {Card, ListGroup, Form, Modal, Spinner} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import fetch from 'node-fetch';
import axios from "axios";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            result: [],
            selected: [],
            activeCategory: null,
            placeToView: null,
            showForm: false,
            isLoading: false,
            categories: ["test1"]
        }
    }

    onSearch = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Paper className="questionnaire">
                    <Form className="question-part">
                        <Form.Group controlId="userForm">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Name" />
                        </Form.Group>

                        <Form.Group controlId="questionForm1">
                            <Form.Label>Question list</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="questionForm2">
                            <Form.Label>Select following Answer</Form.Label>
                            <Form.Control as="select" multiple>
                                <option>Question 1</option>
                                <option>Question 2</option>
                                <option>Question 3</option>
                                <option>Question 4</option>
                                <option>Question 5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="answerForm">
                            <Form.Label>Type you answer below:</Form.Label>
                            <Form.Control placeholder="Type your answer" as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.onSearch.bind(this)}>Save </Button>
                    </Form>
                    <br/>
                </Paper>

            </div>
        );
    }
}

export default withRouter(Questionnaire);