import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import './Introduction.css'
const Introduction = () => {
  return (
    <div className="main-container">
        
      <div>
        <h2>Quiz Rules</h2>
      </div>
      <div>
        <div className="icon-details">
          <AccessAlarmsIcon />
          <div className="details">
            <h3>10 Mins</h3>
            <p>Keep in mind that it is time bound test</p>
          </div>
        </div>
        <div className="icon-details">
          <HelpOutlineIcon/>
          <div className="details">
            <h3>3 Questions</h3>
            <p>We believe that you will ace it</p>
          </div>
        </div>
        <div className="icon-details">
          <LocalPoliceIcon/>
          <div className="details">
            <h3>50% Passing Criteria</h3>
            <p>All the best see you on the other side</p>
          </div>
        </div>
      </div>
      <div className="quiz">
        
        <Link to={'/quiz'}><Button variant="outlined">Start Quiz</Button></Link>
      </div>
      </div>
    
  );
};

export default Introduction;
