import React, { Component } from 'react';
import { Text, View, FlatList } from "react-native";
import {connect} from "react-redux";
// REDUX
import {selectAction} from "../../redux/actions";
// STYLES
import {fonts, layouts} from "../../styles";
// COMPONENTS
import ListItems from "../ListItems/ListItems";

const LeftSide = ({error, total=0, width, ...rest})=> (
  <View style={[layouts.padding, {width: ((width/3)*2)}]}>
    {error && <Text style={fonts.title}>{error}</Text>}
    {!error && <Text style={fonts.title}>Mostrando {total} participaciones</Text>}
    {!error && total > 0 
      ? 
        <MultiSelectList data={rest}/> 
      : 
        <Text>No hay elementos</Text>
    }
  </View>
);


class MultiSelectList extends React.PureComponent {
  _keyExtractor = (item, index) => typeof item.id === "number" ? item.id.toString() : item.id;

  _renderItem = ({item, index}) => {
    const {actions} = this.props.data;
    return (
      <ListItems 
        {...item}
        {...actions}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data.items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const setProps = (props)=>{
  const {items=[], selects } = props;
  const _items = items.map((it,i)=>(
    {
      ...it,
      selected: selects.some(s=>s.id === it.id),
      last: items.length-1 === i
    }
  ));
  return (
    <LeftSide {...props} items={_items}/>
  );
};

const mapStateToProps = ({selectedItemsRed, setScreenSize}) => {
  const {selecteds=[]} = selectedItemsRed;
  return {
    selects: selecteds.map(s=>s),
    ...setScreenSize
  }
};

export default connect(mapStateToProps, selectAction)(setProps);