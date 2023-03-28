export class Product {
    productId: string;
    productName: string;
    productDescription: string;
    productPrice: number;

    constructor(productId: string, productName: string, productDescription: string, productPrice: number) {
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
    }
}
