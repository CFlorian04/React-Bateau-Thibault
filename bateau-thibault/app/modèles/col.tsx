import { View, StyleSheet } from "react-native"


const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`${numRows}col`]}>{children}</View>
    )
  }

  export default Col;

  const styles = StyleSheet.create({  
    "1col": {
      flex: 1,
      margin: 5,
      minHeight: 50,
    },
  
    "2col": {
      flex: 2,
      margin: 5,
      minHeight: 50,
    },
    // end testing
  
  });
  