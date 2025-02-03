import { useContext } from "react";
import { View, Text, Switch } from "react-native";
import { ThemeContext } from "@/components/ThemeProvider";

export default function Settings() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <View>
      <Text>Configuración</Text>
      <Text style={{ color: theme.colors.primary }}>
        Modo {theme.name === "dark" ? "oscuro" : "claro"}
      </Text>
      <Switch 
        value={theme.name === "dark"}
        onValueChange={() => {
          toggleTheme();
        }}
      />
    </View>
  );
}
