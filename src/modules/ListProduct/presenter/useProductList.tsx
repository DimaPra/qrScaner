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
};