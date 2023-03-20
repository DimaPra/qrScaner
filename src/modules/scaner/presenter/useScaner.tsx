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
        const searchProduct = productModel.products.find(products => products.code == e.data)
        if (searchProduct) {
            scanModel.code = e.data
            scanModel.name = searchProduct.name
            scanModel.amount = searchProduct.amount
            productModel.selectedProduct = searchProduct
            navigation.navigate('DataEdit');
        } else {
            scanModel.code = e.data;
            navigation.navigate('Data');
        }
    }
    return { torchEnabled, toggleTorch, onSuccess, navigation };
}