import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { productModel } from "../../../entities/product/ProductModel"
import { scanModel } from "../../../entities/scan/ScanModel"

export const useData = () => {
    const { params } = useRoute<any>();
    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        return () => {
            onChangeCode('')
            onChangeName('')
            onChangeAmount('')
        };
    }, []);

    const onChangeCode = (code: string) => {
        scanModel.code = code;
    }

    const onChangeName = (name: string) => {
        scanModel.name = name
        console.log(scanModel.name);
    }

    const onChangeAmount = (amount: string) => {
        scanModel.amount = amount
        console.log(scanModel.amount);
    }

    const onSaveItem = () => {
        const item = {
            id: String(new Date().getTime()),
            code: scanModel.code,
            name: scanModel.name,
            amount: scanModel.amount,
        }

        productModel.products = [...productModel.products, item]
        console.log(productModel.products);
        scanModel.clear();
        navigation.navigate('List');
    }

    const onEdit = () => {
        const result = productModel.products.map((item) =>
            item.id === productModel.selectedProduct?.id ? { ...item, code: scanModel.code, name: scanModel.name, amount: scanModel.amount } : item)
        productModel.products = result;
        scanModel.clear();
        navigation.navigate('List');
    }

    const onSave = () => {
        if (params.screenFlag === 'edit') {
            onEdit()
        } else {
            onSaveItem()
        };
    };

    return { onChangeCode, params, navigation, onChangeName, onChangeAmount, onSave };
};