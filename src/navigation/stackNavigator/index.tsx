import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DataScreen } from "../../modules/data/ui/DataScreen";
import { TabNavigator } from "../tabNavigator/tabNavigation";
import { PermissionCameraScreen } from "../../modules/permissionCamera/ui/PermissionCameraScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TabNavigator"}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Data" component={DataScreen} initialParams={{ screenFlag: 'add' }} />
      <Stack.Screen name="DataEdit" component={DataScreen} initialParams={{ screenFlag: 'edit' }} />
      <Stack.Screen name="PermissionCamera" component={PermissionCameraScreen} initialParams={{ screenFlag: 'permission' }} />
    </Stack.Navigator>
  );
}