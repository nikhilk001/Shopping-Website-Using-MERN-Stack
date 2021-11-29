import { products } from './products.model';

describe('Products', () => {
  it('should create an instance', function () {
      expect(new products()).toBeTruthy();
    });
});
