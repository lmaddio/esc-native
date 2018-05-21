import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// STYLES
import {listStyles, layouts, fonts} from "../../styles";

const border = {borderBottomWidth: 1};

const ListItems = ({author, description, status, id, select, last, selected})=>(
  <TouchableOpacity onPress={(e)=>select({id, status})}> 
  <View 
    style={[layouts.basicContainer, listStyles.outsideContainer, Object.assign({}, selected ? {backgroundColor: "#d8d8d8"} : {}, last ? border : {})]}
    pointerEvents="auto"
    onClick={(e)=>select({id, status})} 
    className="items"> 
    <View style={[listStyles.imageContainer, layouts.padding]}>
      <Image
        style={{
          alignSelf: 'center',
          height: 75,
          width: 75
        }}
        source={{uri: 'http://via.placeholder.com/200x200'}}
      />
    </View>
    <View style={[layouts.basicContainer, layouts.padding]}>
      <Text style={fonts.subtitle}>{author}</Text>
      <Text style={fonts.text} numberOfLines={3}>{description}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

export default ListItems;