import { FC } from "react"
import { Text, View } from "react-native"
import { styles } from "./styles"

export const Header:FC = () =>{
    return(
        <View style={styles.container}>
         <Text style={styles.text}>Scanner</Text>
        </View>
    )
}