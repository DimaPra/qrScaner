import React, { FC, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from './navigation/rootNavigator';
import { UIProvider } from './UIProvider';

export const App: FC = () => {
    useEffect(()=>{
        SplashScreen.hide();
    },[])
    return (
        <UIProvider>
            <RootNavigator />
        </UIProvider>
    );
};
