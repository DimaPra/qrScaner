import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { scanModel } from "../../../entities/scan/ScanModel";

export const useScaner = () => {
    const [torchEnabled, setTorchEnabled] = useState(false);
    const navigation = useNavigation<NavigationProp<any>>()
    const toggleTorch = () => {
        setTorchEnabled((prevState) => !prevState);
    }
    const onSuccess = (e: { data: any; }) => {
        console.log("QR Code data:", e.data);
        scanModel.code = e.data;
        navigation.navigate('Data');
    }

    return { torchEnabled, toggleTorch, onSuccess, navigation };
}