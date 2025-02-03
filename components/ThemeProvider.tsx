import { ReactNode, useState, useEffect, createContext } from "react";
import { dark, light } from "./themes";
import { useColorScheme, Appearance } from "react-native";

export const ThemeContext = createContext({theme: light, toggleTheme: () => {}});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    // Initialize theme based on user preference
    setTheme(colorScheme === "light" ? light : dark);
  }, []);

  const toggleTheme = () => {
    if (theme === light) {
      setTheme(dark);
      Appearance.setColorScheme("dark");
    } else {
      setTheme(light);
      Appearance.setColorScheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
