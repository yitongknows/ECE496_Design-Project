import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import ExamList from "./ExamList"
import ExamPage from "./ExamPage"
import ReportPage from "./ReportPage"
import Questionnaire from "./Questionnaire";
import ProfessorMain from "./professor-main"
import fetch from 'node-fetch';
import CreateExam from "./CreateExam";
import UserProfile from "./UserProfile";


class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route  exact path="/userProfile">
                    <UserProfile />
                </Route>

                <Route exact path="/professorMain">
                    <ProfessorMain />
                </Route>

                <Route exact path="/createExam">
                    <CreateExam />
                </Route>

                <Route exact path="/exam">
                    <ExamList />
                </Route>

                <Route exact path="/exam/:examId">
                    <ExamPage />
                </Route>

                <Route exact path="/exam/:examId/questionnaire">
                    <Questionnaire />
                </Route>

                <Route exact path="/exam/:examId/report">
                    <ReportPage />
                </Route>
            </Switch>

        );
    }
}

export default Main;