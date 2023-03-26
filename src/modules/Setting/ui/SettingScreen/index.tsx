import { FC, useMemo } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SettingArrow } from "../../../../../assests/icon/SettingArrow"
import { ToggleTheme } from "../component/ToggleTheme"
import { getStyle } from "./style"
import { useSetting } from "../../presenter/useSetting"
import { useUiContext } from "../../../../UIProvider"

export const SettingScreen: FC = () => {
    const { t } = useUiContext();
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { onSelection } = useSetting();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{t('settings')}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onSelection}>
                <Text style={styles.text}>{t('language')}</Text>
                <SettingArrow />
            </TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.text}>{t('dark_theme')}</Text>
                <ToggleTheme />
            </View>        
        </View>
    );
};