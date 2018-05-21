import React from "react";
import { Dimensions } from "react-native";
import { connect } from "react-redux";
// REDUX
import {setSize} from "../redux/actions";

class WindowSize extends React.Component {
  componentDidMount() {
    Dimensions.addEventListener("change", this.props.handler);
    this.props.handler({window: Dimensions.get("window")});
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.props.handler);
  }
  render(){
    return null;
  }
}

export default connect(
  null,
  setSize
)(WindowSize);