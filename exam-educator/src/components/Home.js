import React, {Component} from 'react';
import {Card, ListGroup, Form, Button, Modal, Spinner} from 'react-bootstrap';
import fetch from 'node-fetch';
import axios from "axios";

class Home extends Component {
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

    }

    render() {
        return (
            <div className="home">
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
                        <Form.Label>Select following choose</Form.Label>
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
                    <Button variant="primary" onClick={this.onSearch}>Save </Button>
                </Form>
                <br/>

            </div>
        );
    }
}

export default Home;