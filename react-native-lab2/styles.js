import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 40 : 0,
    //   backgroundColor: "magenta",
    height: "100%",
    marginHorizontal: 20,
  },

  header: {
    fontSize: 19,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});
