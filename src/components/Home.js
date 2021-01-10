import React from "react";

function Home(props) {
  // console.log("Props in Home: ", props)
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.username} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
