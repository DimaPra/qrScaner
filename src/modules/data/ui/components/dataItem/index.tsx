import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IProduct, productModel } from "../../../../../entities/product/ProductModel";
import { styles } from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { scanModel } from "../../../../../entities/scan/ScanModel";
import { DeleteItems } from "../../../../../../assests/icon/DeleteItem";
import { observer } from "mobx-react";

interface IProps {
    product: IProduct
}

export const DataItem: FC<IProps> = observer(({ product }, item) => {
    const navigation = useNavigation<NavigationProp<any>>()

    const onEditItem = () => {
        scanModel.code = product.code;
        scanModel.name = product.name;
        scanModel.amount = product.amount;
        productModel.selectedProduct = product;
        navigation.navigate('DataEdit');
    };
    const onDeleteItem = (id: string) => {
        const newObject = productModel.products.filter(products => products.id !== id);
        productModel.products = newObject
        console.log(product);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onEditItem}>
            <View style={[styles.itemContainer]}>
                <Text numberOfLines={1} style={styles.text}>Code: {product.code}</Text>
                <Text style={styles.text}>Name: {product.name}</Text>
                <Text style={styles.text}>Amount: {product.amount} </Text>
            </View>
            <TouchableOpacity style={styles.buttonDelete} onPress={() => onDeleteItem(product.id)} >
                <DeleteItems />
            </TouchableOpacity>
        </TouchableOpacity>
    );
});


