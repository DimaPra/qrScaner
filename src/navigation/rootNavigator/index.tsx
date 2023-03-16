import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "../stackNavigator";

export const RootNavigator: FC = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
};