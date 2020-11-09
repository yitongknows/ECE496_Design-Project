import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  turnToExamList(){
    this.props.history.push({
      pathname: `/exam`,
    })
  }

  render() {

    return (
      <div>
        <Paper className="home">
          <Button variant="contained" color="primary" onClick={this.turnToExamList.bind(this)}> Student </Button>
          <br/>
          <br/>
          <br/>
          <Button variant="contained" color="primary"> Professor </Button>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Home);