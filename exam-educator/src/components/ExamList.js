import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Exam from '../data/examList.json';
import ButtonBase from '@material-ui/core/ButtonBase';

class ExamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ExamList: Exam,
    }
  }

  turnToQuestionary(course) {
    this.props.history.push({
      pathname: `/exam/${course}/questionnaire`,
    })
  }

  renderExam(exam) {
    return(
      <div>
        <Grid container spacing={2} >
          <Grid item className='exam_grid'>
            <Paper>
              <Typography variant="h4" color="primary">
                {exam.course}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {exam.time}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {exam.title}
              </Typography>
              <Button className='exam_button' variant="contained" color="primary"
                      onClick={this.turnToQuestionary.bind(this, exam.course)}>
                Start Questionary
              </Button>
            </Paper>

          </Grid>

        </Grid>
        <br/>
      </div>
    )
  }

  render() {
    const items = [];
    console.log(this.state.ExamList);
    this.state.ExamList.forEach(exam => {
      items.push(this.renderExam(exam))
    })
    return (
      <div>
        <Paper className="exam_list">
          {items}

        </Paper>
      </div>
    );
  }
}

export default withRouter(ExamList);