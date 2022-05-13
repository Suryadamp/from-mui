import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Typography,
  Button,
  Grid,
  Checkbox,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import PhoneInput from "react-phone-input-2";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SendSharpIcon from "@material-ui/icons/SendSharp";

const useStyles = makeStyles({
  mainContianer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
  },
  formContontianer: {
    position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem",
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
  },
});

const StepOne = (props) => {


  function handleNext() {
    
   //console.log(props.data);
  }
  
    
    


  const classes = useStyles();

  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });
  const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false,
  });
  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };
  const handleClickConfirmShowPassword = () => {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword,
    });
  };
  

  const handleInputChange =(e)=>{
  
    const {name ,value} = e.target
    props.setFormDetails((prev)=> ({
      ...prev,
      [name]: value,
    })
  )}
  return (
    <div className={classes.mainContianer}>
      <Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
        Sign Up with Email
      </Typography>
      <div className={classes.formContontianer}>
        <form onSubmit={handleNext}>
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            label="First Name"
            name= "firstName"
            variant="outlined"
            value={props.data.firstName}
          
            onInput={(e) => handleInputChange(e)}
            
          />
          <TextField
            style={{ width: "100%", margin: "1rem 0" }}
            label="Last Name"
            name= "lastName"
            variant="outlined"
            value={props.data.lastName}
            onInput={(e) => handleInputChange(e)}
          />
          <TextField
            className={classes.inputField}
            
            country={"in"}
            label="phone"
            name= "phone"
            variant="outlined"
            value={props.data.phone}
            onInput={(e) => handleInputChange(e)}
          />
          <TextField
            className={classes.inputField}
            label="Email"
            name= "email"
            variant="outlined"
            value={props.data.email}
            onInput={(e) => handleInputChange(e)}
          />
          <FormControl
            className={classes.inputField}
            variant="outlined"
            onInput={(e) => handleInputChange(e)}
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPasswordValue.showPassword ? "text" : "password"}
              labelWidth={70}
              name= "password"
              value={props.data.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPasswordValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            className={classes.inputField}
            variant="outlined"
            onInput={(e) => handleInputChange(e)}
          >
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              type={
                showConfirmPasswordValue.showConfirmPassword
                  ? "text"
                  : "password"
              }
              labelWidth={135}
              name= "cpassword"
              value={props.data.cpassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickConfirmShowPassword}
                  >
                    {showConfirmPasswordValue.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <>
            {/* <Button
              className={classes.btn}
              variant="contained"
              type="submit"
              endIcon={<SendSharpIcon />}
            >
              Sign Up
            </Button> */}
          </>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
