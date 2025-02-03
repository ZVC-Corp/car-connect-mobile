import { Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";


type ActionType = "accept" | "reject" | "save";

type ActionButtonProps = {
  onPress: () => void;
  type: ActionType
  size: number;
}

export default function ActionButton({ onPress, type, size }: ActionButtonProps) {
  const iconName: {[type: string]: "check" | "remove" | "bookmark" } = {};
  iconName["accept"] = "check";
  iconName["reject"] = "remove";
  iconName["save"] = "bookmark";

  const colors: {[type: string]: string} = {};
  colors["accept"] = "#00AD0E";
  colors["reject"] = "#C80030";
  colors["save"] = "#FFCD03";

  const iconSize = Math.round(size * 0.6);

  return (
    <Pressable style={{...styles.controlButton, width: size, height: size, backgroundColor: colors[type]}} onPress={onPress}>
      <FontAwesome name={iconName[type]} size={iconSize} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  controlButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: "100%"
  },
});
