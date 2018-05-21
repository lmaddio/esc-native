import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Modal,
  View,
} from 'react-native'

const Loader = ()=> (
  <Modal
    transparent={false}
    animationType={'none'}
    onRequestClose={()=>null}
    visible={true} >
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          animating={true} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader;