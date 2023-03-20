import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC, useState } from "react";
import { IProduct, productModel } from "../../../entities/product/ProductModel";
import { scanModel } from "../../../entities/scan/ScanModel";

interface IProps {
    product: IProduct
}

export const useScaner = () => {
    const [torchEnabled, setTorchEnabled] = useState(false);
    const navigation = useNavigation<NavigationProp<any>>()

    const toggleTorch = () => {
        setTorchEnabled((prevState) => !prevState);
    }
    const onSuccess = (e: { data: string; }) => {
        const searchCode = productModel.products.find(products => products.code == e.data)
        if (e.data === searchCode?.code) {
            scanModel.code = e.data
            scanModel.name = searchCode.name
            scanModel.amount = searchCode.amount
            navigation.navigate('DataEdit');
        } else {
            scanModel.code = e.data;
            navigation.navigate('Data');
        }
    }
    return { torchEnabled, toggleTorch, onSuccess, navigation };
}