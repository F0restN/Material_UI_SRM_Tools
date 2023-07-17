import React from 'react';
// Modern theme
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import {Modal} from "@mui/material";

StylesManager.applyTheme("modern");

const surveyJson = {
    elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
    }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    }]
};

function Survey(props) {

    const survey = new Model(surveyJson)

    return (
        <div></div>
    );
}

export default Survey;