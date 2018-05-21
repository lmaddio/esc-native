import { StyleSheet } from "react-native";

export const layouts = StyleSheet.create({
  basicContainer: {
    flex: 1
  },
  parentContainer: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  layout: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  column: {
    flexDirection: "column",
    marginTop: 55
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center"
  },
  padding: {
    padding: 5
  },
  marginBottom: {
    marginBottom: 10
  }
});

export const fonts = StyleSheet.create({
  title: {
    fontSize: 24
  },
  subtitle: {
    fontSize: 20
  },
  text: {
    fontSize: 16
  }  
});

export const listStyles = StyleSheet.create({
  imageContainer: {
    minWidth: "30%",
    paddingTop: 10
  },
  outsideContainer: {
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    borderBottomWidth: 0
  }
});

export const loader = StyleSheet.create({
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