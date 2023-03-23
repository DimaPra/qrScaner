import React, { useMemo } from "react";
import { observer } from "mobx-react";
import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { scanModel } from "../../../../entities/scan/ScanModel";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { useData } from "../../presenter/useCreateProduct";
import { useUiContext } from "../../../../UIProvider";
import { getStyle } from "./style";

export const CreateProductScreen: FC = observer(() => {
    const {t} = useUiContext()
    const {colors} = useUiContext()
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onChangeCode, onChangeName, onChangeAmount, onSave } = useData();
    return (
        <ScreenContainer scrollEnabled containerStyle={styles.container}>
            <View style={styles.containerInput}>
                <Text style={styles.text}>{t('item_code')}</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.code}
                    onChangeText={onChangeCode}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.text}>{t('product_name')}</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.name}
                    onChangeText={onChangeName}
                />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.text}>{t('amount')}</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.amount}
                    onChangeText={onChangeAmount}
                />
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.button} onPress={onSave}>
                <Text style={styles.textBtn}>{t('add')}</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
});