import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { AddItem } from "../../../assests/icon/AddItem";
import { ListSvg } from "../../../assests/icon/ListSvg";
import { QrcodeSvg } from "../../../assests/icon/QrcodeSvg";
import { Setting } from "../../../assests/icon/Setting";
import { CreateProductScreen } from "../../modules/data/ui/CreateProductScreen";
import { ProductListScreen } from "../../modules/ListProduct/ui/ListProductScreen";
import { ScanerScrean } from "../../modules/scaner/ui/ScanerScreen";
import { SettingScreen } from "../../modules/Setting/ui/SettingScreen";
import { useUiContext } from "../../UIProvider";

const Tab = createBottomTabNavigator();
export const TabNavigator: FC = () => {
    const { colors } = useUiContext();


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: colors.background,
                height: 65,
            },
        }}
        >
            <Tab.Screen name='Scanner' component={ScanerScrean} initialParams={{ screenFlag: 'scaner' }} options={{ tabBarIcon: ({ focused }) => <QrcodeSvg color={focused ? colors.medium : colors.iconTab} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
            <Tab.Screen name='Add' component={CreateProductScreen} initialParams={{ screenFlag: 'add' }} options={{ tabBarIcon: ({ focused }) => <AddItem color={focused ? colors.medium : colors.iconTab} width={focused ? 65 : 55} height={focused ? 65 : 60} /> }} />
            <Tab.Screen name='List' component={ProductListScreen} initialParams={{ screenFlag: 'list' }} options={{ tabBarIcon: ({ focused }) => <ListSvg color={focused ? colors.medium : colors.iconTab} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
            <Tab.Screen name='Settings' component={SettingScreen} initialParams={{ screenFlag: 'settings' }} options={{ tabBarIcon: ({ focused }) => <Setting color={focused ? colors.medium : colors.iconTab} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
        </Tab.Navigator>
    );
};