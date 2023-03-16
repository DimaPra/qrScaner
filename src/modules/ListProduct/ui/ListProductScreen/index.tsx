import { observer } from "mobx-react";
import { FC } from "react";
import { FlatList, View } from "react-native";
import { Text } from "react-native";
import { productModel } from "../../../../entities/product/ProductModel";
import { DataItem } from "../../../data/ui/components/dataItem";
import { styles } from './style'

export const ListProductScreen: FC = observer(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>List Product</Text>
            <FlatList contentContainerStyle={{ alignItems: 'center' }}
                data={productModel.products}
                renderItem={({ item }) => <DataItem product={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
});