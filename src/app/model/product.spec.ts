import { Product } from "./product";

describe('Product', () => {
  let product = new Product("id","name","description",0.0);

  it('should create an instance', () => {
    expect(product).toBeTruthy();
  });
  it('should have as productId \'id\'', () => {
    expect(product.productId).toBe("id");
  });
  it('should have as productName \'name\'', () => {
    expect(product.productName).toBe("name");
  });
  it('should have as productDescription \'description\'', () => {
    expect(product.productDescription).toBe("description");
  });
  it('should have as productPrice 0.0', () => {
    expect(product.productPrice).toBe(0.0);
  });
});
