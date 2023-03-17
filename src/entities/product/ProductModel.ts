import { IStorage, storage } from "../../libs/storage";
import { MobXRepository } from "../../MobXRepository/MobXRepository";

export interface IProduct {
    id: string,
    code: string,
    name: string,
    amount: string
}

export interface IProductModel {
    products: IProduct[] | []
    selectedProduct: IProduct | null;
}
class ProductModel implements IProductModel {
    private productRepository = new MobXRepository<IProduct[]>([]);
    private selectedProductRepository = new MobXRepository<IProduct | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private load = () => {
        this.storage.get('PRODUCTS')
            .then(data => { data && this.productRepository.save(data) })
            .catch(error => console.warn('ProductsModel -> load: PRODUCTS', error));
    }

    private persistProducts = (data: IProduct[]) => {
        if (data) {
            this.storage.set('PRODUCTS', data);
        } else {
            this.storage.remove('PRODUCTS');
        }
    }

    get products() {
        return this.productRepository.data || []
    }

    set products(data: IProduct[]) {
        this.productRepository.save(data)
        this.persistProducts(data)
    }

    get selectedProduct() {
        return this.selectedProductRepository.data || null
    }

    set selectedProduct(data: IProduct | null) {
        this.selectedProductRepository.save(data)
    }

    clear = () => {
    };
}

export const productModel = new ProductModel(storage);