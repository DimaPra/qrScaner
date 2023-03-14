import React, { FC } from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DataScreen } from "../../modules/data/ui/DataScreen";
import { TabNavigator } from "../tabNavigator/tabNavigation";

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TabNavigator"}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Data" component={DataScreen} initialParams={{ screenFlag: 'add' }} />
      <Stack.Screen name="DataEdit" component={DataScreen} initialParams={{ screenFlag: 'edit' }} />
    </Stack.Navigator>

  );
}