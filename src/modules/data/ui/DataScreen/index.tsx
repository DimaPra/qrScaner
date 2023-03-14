import { observer } from "mobx-react";
import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { productModel } from "../../../../entities/product/ProductModel";
import { scanModel } from "../../../../entities/scan/ScanModel";
import { styles } from "./style";
import { NavigationProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import React from "react";


export const DataScreen: FC = observer(() => {
    const { params } = useRoute<any>()
    console.log(scanModel.code);
    const navigation = useNavigation<NavigationProp<any>>()

    useFocusEffect(
        React.useCallback(() => {
          const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            return () => unsubscribe();
          });
        }, [navigation])
      );

    const onChangeCode = (code: string) => {
        scanModel.code = code
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
            amount: scanModel.amount
        }
        productModel.products = [...productModel.products, item]
        console.log(productModel.products);
        scanModel.clear();
        navigation.navigate('List');

        
    }

    const onEdit = () => {
    const result = productModel.products.map((item)=>
    item.id === productModel.selectedProduct?.id ? {...item, code:scanModel.code, name:scanModel.name, amount:scanModel.amount } : item)
    productModel.products = result;
    scanModel.clear();
    navigation.navigate('List')
}
    

    const onSave = () => {
        if (params.screenFlag === 'edit') {
            onEdit()
            console.log(productModel.products);

        } else {
            onSaveItem()
            console.log(productModel.products);
            
        }
    }
    return (
        <ScreenContainer scrollEnabled containerStyle={styles.container}>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Item Code</Text>
                <TextInput style={styles.item} value={scanModel.code} onChangeText={onChangeCode} />
            </View>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Product Name</Text>
                <TextInput style={styles.item} value={scanModel.name} onChangeText={onChangeName} />
            </View>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Amount</Text>
                <TextInput style={styles.item} value={scanModel.amount} onChangeText={onChangeAmount} />
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.button} onPress={onSave}>
                <Text style={styles.textBtn}>Add to the list</Text>
            </TouchableOpacity>
        </ScreenContainer>
    )

})