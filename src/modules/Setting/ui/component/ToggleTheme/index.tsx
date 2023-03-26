import { FC } from "react";
import { Switch, View } from "react-native";
import { useUiContext } from "../../../../../UIProvider";
import { styles } from "./style";

export const ToggleTheme: FC = () => {
  const { theme, setTheme } = useUiContext();

  const isEnabled = theme === 'dark';

  const toggleSwitch = () => {
    setTheme(theme === "light" ? 'dark' : 'light');
  }
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#f17474" }}
        thumbColor={isEnabled ? "#f17474" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};