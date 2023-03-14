import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { ListSvg } from "../../../assests/icon/ListSvg";
import { QrcodeSvg } from "../../../assests/icon/QrcodeSvg";
import { DataScreen } from "../../modules/data/ui/DataScreen";
import { ListScreen } from "../../modules/list/ui/ListScreen";
import { ScanerScrean } from "../../modules/scaner/ui/ScanerScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {

  return (
      <Tab.Navigator screenOptions={{
        headerShown: false ,
        tabBarShowLabel:false, 
        tabBarStyle:{
        backgroundColor:'#B8860B',
        height:70
      }}} >
        <Tab.Screen  name="Scaner" component={ScanerScrean} options={{tabBarIcon:({focused})=> <QrcodeSvg color={focused ?  'blue': '#fff'} width={focused ? 40 : 34} height={focused? 40 : 34}/>}}/> 
        <Tab.Screen name="List" component={ListScreen} options={{tabBarIcon:({focused})=> <ListSvg color={focused ?  'blue': '#fff'} width={focused ? 40 : 34} height={focused? 40 : 34}/>}}/>
      </Tab.Navigator>
  );
};