import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FC, useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BackArrow } from "../../../../../assests/icon/BackArrow";
import { FlagEn } from "../../../../../assests/icon/FlagEn";
import { FlagRu } from "../../../../../assests/icon/FlagRu";
import { FlagUa } from "../../../../../assests/icon/FlagUa";
import { useUiContext } from "../../../../UIProvider";
import { LocaleButton } from "../component /battom/ui";
import { getStyle } from "./style";

type TLocale = 'en' | 'ru' | 'uk';

export const LanguageScreen: FC = () => {
    const { t, locales, colors , setLocale} = useUiContext()
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<NavigationProp<any>>()
    const onBack = () => {
        navigation.navigate('Settings')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <BackArrow />
                </TouchableOpacity>
                <Text style={styles.headerText}>{t('language')}</Text>
            </View>
            {locales.map((item) => <LocaleButton key={item} item={item}/>)}
        </View>
    )

}