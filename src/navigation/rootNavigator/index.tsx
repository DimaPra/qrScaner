import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "../tabNavigator/tabNavigation";
import { StackNavigator } from "../stackNavigator";
import { Screen } from "react-native-screens";

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>

  );
};