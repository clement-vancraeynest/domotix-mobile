import "@expo/metro-runtime";
import * as React from "react";
import { OpaqueColorValue, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import RoomsScreen from "./screens/RoomsScreen";
import ObjectsScreen from "./screens/ObjectsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { styleTheme } from "./style/styleTheme";
import Octicons from "@expo/vector-icons/Octicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: "home" | "package" | "apps" | "gear";
            switch (route.name) {
              case "HOME":
                iconName = "home";
                break;
              case "PIÈCES":
                iconName = "package";
                break;
              case "OBJETS":
                iconName = "apps";
                break;
              case "PARAMÈTRES":
                iconName = "gear";
                break;
            }
            return <Octicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: styleTheme.bgBlueColor,
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="PIÈCES" component={RoomsScreen} />
        <Tab.Screen name="OBJETS" component={ObjectsScreen} />
        <Tab.Screen name="PARAMÈTRES" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
