import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { ListSvg } from "../../../assests/icon/ListSvg";
import { QrcodeSvg } from "../../../assests/icon/QrcodeSvg";
import { ListProductScreen } from "../../modules/ListProduct/ui/ListProductScreen";
import { ScanerScrean } from "../../modules/scaner/ui/ScanerScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: '#DCDCDC',
                height: 55,
            }
        }} >
            <Tab.Screen name="Scaner" component={ScanerScrean} options={{ tabBarIcon: ({ focused }) => <QrcodeSvg color={focused ? '#FFA07A' : '#fff'} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
            <Tab.Screen name="List" component={ListProductScreen} options={{ tabBarIcon: ({ focused }) => <ListSvg color={focused ? '#FFA07A' : '#fff'} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
        </Tab.Navigator>
    );
};