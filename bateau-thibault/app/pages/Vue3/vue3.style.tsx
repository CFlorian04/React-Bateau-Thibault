import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  child_container: {
    flex: 1,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: "#000000",
    fontWeight: "400",
    fontStyle: "italic",
  },

  buttonsContainer: {
    flexDirection: "column",
    margin: 10,
  },

  touchButton: {
    backgroundColor: " rgba(0, 0, 0, 0.3)",
    borderBlockColor: "#000000",
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: 'solid',
    minHeight: 50,
  },

  text_Button: {
    flex: 1,
    alignContent: 'center',

    textAlign: 'center',
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    fontStyle: "italic",
  },
});
