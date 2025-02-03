import { useContext } from "react";
import { Tabs } from "expo-router";
import { ThemeContext } from "@/components/ThemeProvider";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function TabsLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.common.background} />
      <Tabs 
        screenOptions={{
          headerShown: false, 
          tabBarStyle: { backgroundColor: theme.colors.common.background, ...styles.tabBar },
        }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight
  },

  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
  }
});
