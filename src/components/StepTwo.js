import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import { FormControlLabel } from "@material-ui/core";
import StepThree from "./StepThree";

const StepTwo = (props) => {
  console.log(props.plan);
  const [radioChange, setRadioChange] = useState("");
  // const{step}=props;
  // console.log("props");
  const handlePlanChange = (e) => {
    const { name, value } = e.target;
    props.setPlan((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <RadioGroup
        row
        aria-label="Enter detail"
        name="planInfo"
        onClick={(e) => handlePlanChange(e)}
        value={props.plan?.planInfo}
      >
        <FormControlLabel
          type="radio"
          value="Standard Plan $150"
          control={<Radio />}
          label="Standard Plan $150"
        />
        <FormControlLabel
          type="radio"
          value="Perimum Plan $799"
          control={<Radio />}
          label="Perimum Plan $799"
        />
      </RadioGroup>

      {/* <StepThree step={radioChange} data={data}  name="Surya"/> */}

      {/* {props.data.map((i)=>{
  return (
    <h1>{i}</h1>
  )
})} */}
    </div>
  );
};

export default StepTwo;
