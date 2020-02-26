import React, { Component } from "react";
//import es6-promise and isomorphic-fetch for url fetch

class Page1 extends Component {

    componentDidMount() {
        // console.log(this.props.match);
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
            return response.json();
        })
        .then((obj) => console.log(obj));
    }
    
  render() {
    return <h1>This is Page 1</h1>;
  }
}

export default Page1;
