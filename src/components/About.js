import User from "./User";
import React from "react";

class About extends React.Component {

  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount")
  }
  
  render() {
    console.log("Parent Render");
    return(
    <div>
      <h1>Namaste Prashant</h1>
      <h2>This is the Namate React Web Series</h2>
      <User name={"Prashant Singh"} location={"Greater Noida"}/>
      {/* <User name={"Prashant Singh 2"} location={"Greater Noida"}/> */}
    </div>
  );
  }
  
};

export default About;