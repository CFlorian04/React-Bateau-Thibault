import { Text, StyleSheet } from "react-native";

const Title = (props) => {
    return (
        <Text style={styles.title}>{props.text}</Text>
    )
}

export default Title;


export const styles = StyleSheet.create({

title: {
    fontFamily: 'Satisfy',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    paddingVertical: 50,
  },
});
