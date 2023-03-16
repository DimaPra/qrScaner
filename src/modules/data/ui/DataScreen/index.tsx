import React from "react";
import { observer } from "mobx-react";
import { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { scanModel } from "../../../../entities/scan/ScanModel";
import { styles } from "./style";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { useData } from "../../presenter/useData";

export const DataScreen: FC = observer(() => {
    const { onChangeCode, onChangeName, onChangeAmount, onSave } = useData();
    return (
        <ScreenContainer scrollEnabled containerStyle={styles.container}>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Item Code</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.code}
                    onChangeText={onChangeCode} />
            </View>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Product Name</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.name}
                    onChangeText={onChangeName} />
            </View>
            <View style={styles.contsinerInput}>
                <Text style={styles.text}>Amount</Text>
                <TextInput
                    style={styles.item}
                    value={scanModel.amount}
                    onChangeText={onChangeAmount} />
            </View>
            <View style={{ flex: 1 }} />
            <TouchableOpacity style={styles.button} onPress={onSave}>
                <Text style={styles.textBtn}>Add</Text>
            </TouchableOpacity>
        </ScreenContainer>
    );
});