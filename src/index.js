import React from "react";
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
import { connect } from "react-redux";

// COMPONENTS
import WindowsSize from "./components/WindowsSize";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import Loader from "./components/Loader/Loader";
import ListDataService from "./services/ListDataService";

// STYLES
import {layouts, fonts} from "./styles";

const Layout = ({data, error, checkIn}) => (
  <View style={layouts.parentContainer}>
    <WindowsSize/>
    {checkIn && <Loader/>}
        <View style={layouts.titleContainer}>
          {!data && <Text style={fonts.title}>Sin datos</Text>}
        </View>
        <View style={[layouts.parentContainer, layouts.layout]}>
          <ListDataService>
            <LeftSide/>
          </ListDataService>
          <RightSide/>
        </View>
  </View>
);

const mapDataToProps = ({setListDataRed, setPutState}) => {
  return {...setListDataRed, ...setPutState};
}

export default connect(
  mapDataToProps
)(Layout);