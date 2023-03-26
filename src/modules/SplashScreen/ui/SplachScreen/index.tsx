import { FC, useMemo } from "react";
import { View } from "react-native";
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";

export const  SplashScreenComponent:FC =()=> {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    return (
      <View style={styles.container}>
      </View>
    );
  }