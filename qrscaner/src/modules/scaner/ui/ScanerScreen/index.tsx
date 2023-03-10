import { FC } from "react"
import { View } from "react-native"
import QRCodeScanner from "react-native-qrcode-scanner"

export const ScanerScrean: FC =()=>{
    const sonSuccess = (e: { data: any }) =>{
         
            console.log(e.data);
          
    }
    return(
        <View>
            <QRCodeScanner
            onRead={sonSuccess}
            />
        </View>
    )
}