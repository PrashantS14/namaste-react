import React from "react";

class User extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      count : 0,
      count2 : 2,
      userInfo :{
        name : "Dummy",
        location : "Default",

      }
    };

    // console.log(this.props.name+"Child Constructor");
  }

    async componentDidMount() {
    // console.log(this.props.name+"Child ComponentDidMount");
    
   const data = await fetch("https://api.github.com/users/PrashantS14");
   const json = await data.json();
   
     this.setState({
    userInfo : json,
  });

   console.log(json);

  
  }


  
  render() {
    // const {name, location} = this?.props;

    const {name, location, avatar_url, login} = this.state.userInfo;


    // console.log(this.props.name+"Child Render");

    return (
    <div className = "user-card">
     
     <h1>Count : {this.state.count}</h1> 
     
     <button onClick={() => {
      this.setState({
        count : this.state.count + 1 ,
      });
     }}> Count Increase </button>
    
    <img src={avatar_url}/>
    <h1>Name : {name}</h1>
    <h1>Location : {location} </h1>
    <h1>Contact : {login}</h1>
    </div>
  );
    
  };
};
export default User;