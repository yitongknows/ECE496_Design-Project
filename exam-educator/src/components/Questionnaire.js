import React, {Component} from 'react';
import {Card, ListGroup, Form, Modal, Spinner} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { withRouter } from 'react-router-dom';
import Question from '../data/sampleQuestion.json';
import fetch from 'node-fetch';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));



class Questionnaire extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions : Question,
        }
    }

    saveAnswer = () => {
        console.log(this.props);
        this.props.history.push({
            pathname: `/exam/${this.props.match.params.examId}`,
        })
    }

    renderAnswer(ans) {
        return (
          <div>
              <FormControlLabel
                control={<Checkbox color="primary" name={ans} />}
                label= {ans}
              />
          </div>
        )
    }


    renderQuestion(question) {
        const items = [];

        question.answer.forEach(ans => {
            items.push(this.renderAnswer(ans))
        })
        return(
          <div>
              <Grid container spacing={2} >
                  <Grid item className='questionaire_grid'>
                      <Paper>
                          <FormControl required component="fieldset" className=''>
                              <FormLabel component="legend">{question.question}</FormLabel>
                              <FormGroup>
                                  {items}
                              </FormGroup>
                          </FormControl>
                      </Paper>

                  </Grid>

              </Grid>
              <br/>
          </div>
        )
    }

    render() {
        const items = [];
        console.log(Question);
        this.state.questions.forEach(question => {
            items.push(this.renderQuestion(question))
        })
        return (
            <div>
                <Paper className="questionaire">
                    {items}
                    <Button variant="contained" color="primary" onClick={this.saveAnswer.bind(this)}> Save Answer </Button>
                </Paper>

            </div>
        );
    }
}

export default withRouter(Questionnaire);