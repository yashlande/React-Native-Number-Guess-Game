import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.textStyle}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
