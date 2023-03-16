import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateProductScreen } from "../../modules/data/ui/CreateProductScreen";
import { TabNavigator } from "../tabNavigator/tabNavigation";
import { PermissionCameraScreen } from "../../modules/permissionCamera/ui/PermissionCameraScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"TabNavigator"}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Data" component={CreateProductScreen} initialParams={{ screenFlag: 'add' }} />
      <Stack.Screen name="DataEdit" component={CreateProductScreen} initialParams={{ screenFlag: 'edit' }} />
      <Stack.Screen name="PermissionCamera" component={PermissionCameraScreen} initialParams={{ screenFlag: 'permission' }} />
    </Stack.Navigator>
  );
}