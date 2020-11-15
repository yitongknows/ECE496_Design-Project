import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";

class ReportPage extends Component {
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
      <div className="questionnaire">
        <div>
          <Paper className="report">
            <Typography variant="body1">
              Below is the user search history during the exam:
            </Typography>
            <br/>
            <Typography variant="body1">
              https://www.chegg.com/writing/
            </Typography>
            <Typography variant="body1">
              https://stackoverflow.com/questions/53722893/how-to-retrieve-data-from-promise-object-in-react-js
            </Typography>
          </Paper>

        </div>

      </div>
    );
  }
}

export default ReportPage;