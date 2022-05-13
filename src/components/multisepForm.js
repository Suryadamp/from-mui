import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typograohy,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: "6rem auto",
    border: "1px solid #999",
    "& .MuiStepIcon-root.MuiStepIcon-active ": {
      color: "red",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed ": {
      color: "green",
    },
  },
});
const MultisepForm = (props) => {
  const [activeStep, setActivestep] = useState(0);

  const { step } = props;
  const [formDetails, setFormDetails] = useState({});
  const [plan, setPlan] = useState({});
  function getsteps() {
    return ["SIGNUP", "CHOOSE UP", "CHEAKOUT"];
  }
  const handleNext = (props) => {
    //console.log(formDetails);
    setActivestep((prevActivestep) => prevActivestep + 1 );
  };
  const handleprevious = (props) => {
    setActivestep((prevActivestep) => prevActivestep -1);
  };
  const steps = getsteps();
  console.log(steps)
  function getstepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StepOne data={formDetails} setFormDetails={setFormDetails} />;
      case 1:
        return <StepTwo data={formDetails} setPlan={setPlan} plan={plan} />;
      case 2:
        return <StepThree data={formDetails} plan={plan} />;
      default:
        return "unknown step";
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          "Thanks for submitting your document!  "
        ) : (
          <>
            {getstepsContent(activeStep)}
            <Button onClick={handleprevious}>
              {" "}
              {activeStep === 0 ? "" : "back"}
            </Button>
            <Button onClick={handleNext}>
              {" "}
              {activeStep === steps.length -1  ? "Submit" : "Next"}
              {console.log(activeStep)}
            </Button>
            
          </>
        )}
      </>
    </div>
  );
};
export default MultisepForm;
