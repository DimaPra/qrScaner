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
    private productListRepository = new MobXRepository<IProduct[]>([]);
    private selectedProductRepository = new MobXRepository<IProduct | null>(null);
    get products() {
        return this.productListRepository.data || []
    }
    set products(data: IProduct[]) {
        this.productListRepository.save(data)
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

export const productModel = new ProductModel();
