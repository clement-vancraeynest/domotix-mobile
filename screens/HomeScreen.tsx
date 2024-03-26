import * as React from "react";
import { View, Text } from "react-native";
import { cssStandard } from "../theme";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: cssStandard.mainBgColor,
      }}
    >
      <Text>Home !</Text>
    </View>
  );
}
