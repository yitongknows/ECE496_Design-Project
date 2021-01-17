import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Exam from '../data/examList.json';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Form from 'react-bootstrap/Form'

class ProfessorMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ExamList: Exam,
        }
    }

    checkStudentList(course) {
        // this.props.history.push({
        //     pathname: `/studentList/${course}/questionnaire`,
        // })
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

                            <ProgressBar animated now={45} />

                            <Button className='exam_button' variant="contained" color="primary"
                                    onClick={this.checkStudentList.bind(this, exam.course)}>
                                Check Student List
                            </Button>
                        </Paper>

                    </Grid>

                </Grid>
                <br/>
            </div>
        )
    }

    turnToExamList(){
        this.props.history.push({
            pathname: `/createExam`,
        })
    }


    render() {
        const items = [];
        console.log(this.state.ExamList);
        this.state.ExamList.forEach(exam => {
            items.push(this.renderExam(exam))
        })
        return (
            <div>
                <div>
                    Hi Professor XXX
                </div>

                <div>
                    <Button onClick={this.turnToExamList.bind(this)}>
                        Create New Exam
                    </Button>
                </div>

                <div>
                    <Paper className="exam_list">
                        {items}
                    </Paper>
                </div>

            </div>
        );
    }
}

export default withRouter(ProfessorMain);