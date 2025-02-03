import { Stack } from "expo-router";
import ThemeProvider from "@/components/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <Stack screenOptions={{headerShown: false}} />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
