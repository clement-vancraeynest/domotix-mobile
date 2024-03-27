import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styleTheme } from "../style/styleTheme";
import { styleBase } from "../style/styleBase";
import Box from "./../components/system/Box";
import useFetch from "../hooks/userFetch";

export default function HomeScreen() {
  let data = useFetch("check.php");
  console.log(data);

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        styleBase.screen,
      ]}
    >
      <Box>
        <Text>Home !</Text>
      </Box>
    </View>
  );
}
