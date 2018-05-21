import React, {Component} from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from "react-redux";

// REDUX
import {sendNewStatus} from "../../redux/actions";
// STYLES
import {listStyles, layouts, fonts} from "../../styles";

const STATUS = {
  APROVED: "APROVED",
  REJECTED: "REJECTED"
};

class RightSide extends Component {
  componentDidUpdate(prevProps) {
    const {checkIn, data, error} = this.props;
    if(checkIn !== prevProps.checkIn && (error || data)) {
      setTimeout(()=>Alert.alert(!data ? "Error al actualizar" : "Estado actualizado"), 400);
    }
  }
  render(){
    const {lists, sendNewStatus} = this.props;
    return (
    <View style={[layouts.parentContainer, layouts.column, layouts.padding]}>
      <Text style={[fonts.subtitle, layouts.marginBottom]}>Seleccion: {lists.length} participaciones</Text>
      <View style={[layouts.basicContainer, {marginTop: 25}]}>
        <View style={layouts.marginBottom}>
          <Button 
            onPress={(e)=>sendNewStatus(lists, STATUS.APROVED)}
            disabled={!lists.length}
            title="Aprobar"
            color="green"
            />
        </View>
        <View >
          <Button 
            onPress={(e)=>sendNewStatus(lists, STATUS.REJECTED)}
            disabled={!lists.length}
            title="Rechazar"
            color="red"
            style={layouts.buttonReject}
            />
        </View>
      </View>
    </View>
    );
  }
}


const mapStateToProps = ({setPutState, selectedItemsRed}) => {
  const {selecteds=[]} = selectedItemsRed;
  return {
    lists: selecteds.map(s=>s),
    ...setPutState
  }
};

export default connect(
  mapStateToProps,
  sendNewStatus
)(RightSide);