import { StyleSheet } from "react-native";
import { styleTheme } from "./styleTheme";

export const styleBase = StyleSheet.create({
  screen: {
    color: styleTheme.textMainColor,
    backgroundColor: styleTheme.bgColor,
  },
});
