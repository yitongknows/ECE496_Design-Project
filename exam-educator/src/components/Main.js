import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import ExamList from "./ExamList"
import ExamPage from "./ExamPage"
import ReportPage from "./ReportPage"
import Questionnaire from "./Questionnaire";
import fetch from 'node-fetch';


class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/exam">
                    <ExamList />
                </Route>

                <Route exact path="/exam/APS360">
                    <ExamPage />
                </Route>

                <Route exact path="/exam/APS360/questionnaire">
                    <Questionnaire />
                </Route>

                <Route exact path="/exam/APS360/report">
                    <ReportPage />
                </Route>
            </Switch>

        );
    }
}

export default Main;