import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useUiContext } from "../../../UIProvider"

export const useSetting = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    const onSelection = () => {
        navigation.navigate('Language')
    }
    return { onSelection }
}