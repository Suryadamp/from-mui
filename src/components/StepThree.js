import React from "react";

const StepThree = (props) => {
     console.log(props.data)
     
    return ( 
        <div>
            <>
            {/* <h1  onClick={(e) => props.step(e.target.value)}></h1> */}
            <i> User Information </i>
           
            <h3>FirstName: {props.data.firstName}</h3>
            <h3>LastName: {props.data.lastName}</h3>
            <h3>EMail:{props.data.email}</h3>
            <h3>Phone: {props.data.phone}</h3>
            <h3>Pasword: {props.data.password}</h3>
            <h3>CPassword:  {props.data.cpassword}</h3>
            </>
            <div>
                <h1>Selected Plan</h1>
                <h3><i>{props.plan.planInfo}</i></h3>
            </div>
        </div>
     );
}
 
export default StepThree ;