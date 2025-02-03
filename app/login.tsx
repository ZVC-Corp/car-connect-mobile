import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Login() {
  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <Link href="./signup">No tienes una cuenta? Registrate</Link>
      <Link href="./user/home">Ir a la página de usuario</Link>
    </View>
  );
}
