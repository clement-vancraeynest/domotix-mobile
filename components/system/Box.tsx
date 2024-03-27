import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styleTheme } from "../../style/styleTheme";
import { styleBase } from "../../style/styleBase";

export default function Box(props) {
  return <View style={styles.box}>{props.children}</View>;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: styleTheme.boxBgColor,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    shadowColor: styleTheme.boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: styleTheme.boxElevation,
  },
});
