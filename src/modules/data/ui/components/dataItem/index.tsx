import { FC, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IProduct, productModel } from "../../../../../entities/product/ProductModel";
import { getStyle } from "./style";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { scanModel } from "../../../../../entities/scan/ScanModel";
import { DeleteItems } from "../../../../../../assests/icon/DeleteItem";
import { observer } from "mobx-react";
import { EditTask } from "../../../../../../assests/icon/EditTask";
import { useUiContext } from "../../../../../UIProvider";

interface IProps {
    product: IProduct
}

export const DataItem: FC<IProps> = observer(({ product }, item) => {
    const { t } = useUiContext();
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<NavigationProp<any>>();

    const onEditItem = () => {
        scanModel.code = product.code;
        scanModel.name = product.name;
        scanModel.amount = product.amount;
        productModel.selectedProduct = product;
        navigation.navigate('DataEdit');
    };
    const onDeleteItem = (id: string) => {
        const newObject = productModel.products.filter(products => products.id !== id);
        productModel.products = newObject;
        console.log(product);
    }

    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.itemContainer}>
                <View>
                    <Text numberOfLines={1} style={styles.text}>{t('code')} : {product.code}</Text>
                    <Text style={styles.text}>{t('name')} : {product.name}</Text>
                    <Text style={styles.text}>{t('amount')} : {product.amount} </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonEdit} onPress={onEditItem}>
                        <EditTask />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => onDeleteItem(product.id)} >
                        <DeleteItems />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
});


