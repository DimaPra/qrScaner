import { FC, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { FlagEn } from "../../../../../../../assests/icon/FlagEn";
import { FlagRu } from "../../../../../../../assests/icon/FlagRu";
import { FlagUa } from "../../../../../../../assests/icon/FlagUa";
import { useUiContext } from "../../../../../../UIProvider";
import { getStyle } from "./style";
interface IProps{
    item:string
}

export const LocaleButton:FC<IProps> = ({item}) =>{
    const { t,  colors , setLocale} = useUiContext()
    const styles = useMemo(() => getStyle(colors), [colors]);

    const flagImage = {
        en: <FlagEn />,
        uk: <FlagUa />,
        ru: <FlagRu />,
    }
    type TLocale = 'en' | 'ru' | 'uk';

    return(
            <TouchableOpacity style={styles.button} onPress={()=> setLocale(item)}>
                {flagImage[item as TLocale]}
                <Text style={styles.text}>{t(item)}</Text>
            </TouchableOpacity>            
    )
}