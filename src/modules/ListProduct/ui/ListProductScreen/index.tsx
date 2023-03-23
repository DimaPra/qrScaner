import { observer } from "mobx-react";
import { FC } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { SaveFail } from "../../../../../assests/icon/SaveFile";
import { productModel } from "../../../../entities/product/ProductModel";
import { DataItem } from "../../../data/ui/components/dataItem";
import { useProductList } from "../../presenter/useProductList";
import { styles } from './style'

export const ProductListScreen: FC = observer(() => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.text}>Product List</Text>
                <TouchableOpacity style={styles.buttonSave} onPress={useProductList}>
                    <SaveFail />
                </TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={{ alignItems: 'center' }}
                data={productModel.products}
                renderItem={({ item }) => <DataItem product={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
});