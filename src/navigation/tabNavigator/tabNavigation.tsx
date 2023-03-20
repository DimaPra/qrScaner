import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { AddItem } from "../../../assests/icon/AddItem";
import { ListSvg } from "../../../assests/icon/ListSvg";
import { QrcodeSvg } from "../../../assests/icon/QrcodeSvg";
import { CreateProductScreen } from "../../modules/data/ui/CreateProductScreen";
import { ProductListScreen } from "../../modules/ListProduct/ui/ListProductScreen";
import { ScanerScrean } from "../../modules/scaner/ui/ScanerScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: '#DCDCDC',
                height: 65,
            },
        }}
        >
            <Tab.Screen name="Add" component={CreateProductScreen} initialParams={{ screenFlag: 'add' }} options={{ tabBarIcon: ({ focused }) => <AddItem color={focused ? '#FFA07A' : '#fff'} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
            <Tab.Screen name="Scaner" component={ScanerScrean} initialParams={{ screenFlag: 'scaner' }} options={{ tabBarIcon: ({ focused }) => <QrcodeSvg color={focused ? '#FFA07A' : '#fff'} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
            <Tab.Screen name="List" component={ProductListScreen} initialParams={{ screenFlag: 'list' }} options={{ tabBarIcon: ({ focused }) => <ListSvg color={focused ? '#FFA07A' : '#fff'} width={focused ? 40 : 34} height={focused ? 40 : 34} /> }} />
        </Tab.Navigator>
    );
};