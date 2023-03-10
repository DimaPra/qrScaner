import React, {FC, type PropsWithChildren} from 'react';
import {View} from 'react-native';
import { ScanerScrean } from './modules/scaner/ui/ScanerScreen';

export const App:FC = () => {
  return (
    <ScanerScrean/>
  );
};
