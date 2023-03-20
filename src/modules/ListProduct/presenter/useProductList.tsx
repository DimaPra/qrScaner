import { productModel } from "../../../entities/product/ProductModel";
import RNFS from 'react-native-fs';

export const useProductList = () => {

  const path = RNFS.ExternalDirectoryPath + '/products.json';

  const jsonMobs = JSON.stringify(productModel.products);

  RNFS.writeFile(path, jsonMobs, 'utf8')
    .then(() => {
      console.log('Массив сохранен');
    })
    .catch(error => {
      console.log(error.message);
    });
  // const json = JSON.stringify(productModel.products);

  // if (Platform.OS === 'android') {
  //     PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //             title: 'Разрешение на запись файлов',
  //             message: 'Это приложение требует разрешения на запись файлов для сохранения данных.',
  //             buttonNeutral: 'Позже',
  //             buttonNegative: 'Отмена',
  //             buttonPositive: 'OK',
  //         },
  //     ).then((granted) => {
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //             RNFS.writeFile(RNFS.DocumentDirectoryPath + '/myData.js', json, 'utf8')
  //                 .then((success) => {
  //                     console.log('Файл успешно сохранен.');
  //                 })
  //                 .catch((err) => {
  //                     console.log(err.message);
  //                 });
  //         } else {
  //             console.log('Разрешение на запись файлов не получено.');
  //         }
  //     });
  // } else {
  //     RNFS.writeFile(RNFS.DocumentDirectoryPath + '/myData.js', json, 'utf8')
  //         .then((success) => {
  //             console.log('Файл успешно сохранен.');
  //         })
  //         .catch((err) => {
  //             console.log(err.message);
  //         });
  // }
}