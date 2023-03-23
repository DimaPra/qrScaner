import { observer } from "mobx-react";
import { FC, useMemo } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { SaveFail } from "../../../../../assests/icon/SaveFile";
import { productModel } from "../../../../entities/product/ProductModel";
import { useUiContext } from "../../../../UIProvider";
import { DataItem } from "../../../data/ui/components/dataItem";
import { useProductList } from "../../presenter/useProductList";
import { getStyle } from "./style";

export const ProductListScreen: FC = observer(() => {
    const {t} = useUiContext()
    const {colors} = useUiContext()
    const styles = useMemo(() => getStyle(colors), [colors]);
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.text}>{t('product_list')}</Text>
                <TouchableOpacity style={styles.buttonSave} onPress={useProductList}>
                    <SaveFail />
                </TouchableOpacity>
            </View>
            <FlatList contentContainerStyle={{ alignItems: 'center' }}
                data={productModel.products}
                renderItem={({ item }) => <DataItem product={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
});