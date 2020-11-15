import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import {withRouter} from "react-router-dom";

class ExamPage extends Component {
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

  FinishExam = () => {
    this.props.history.push({
      pathname: `/exam/${this.props.match.params.examId}/report`,
    })
  }

  render() {
    return (
      <div className="exam">
        <Form className="question-part">
          <Typography variant="h4" color="primary">
            {this.props.match.params.examId}
          </Typography>
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
          <Button variant="primary" onClick={this.FinishExam.bind(this)}>Submit Answer </Button>
        </Form>
        <br/>

      </div>
    );
  }
}

export default withRouter(ExamPage);