import { TestBed } from '@angular/core/testing';

import { AddcartService } from './addcart.service';

describe('AddcartService', () => {
  let service: AddcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should add product to cart', () => {
    const product = { id: 1, name: 'Product 1', price: 10 };
    service.addToCart(product);
    expect(service.getItems()).toContain(product);
  });

  it('should retrieve items from cart', () => {
    const product1 = { id: 1, name: 'Product 1', price: 10 };
    const product2 = { id: 2, name: 'Product 2', price: 20 };
    service.addToCart(product1);
    service.addToCart(product2);
    expect(service.getItems()).toEqual([product1, product2]);
  });


  it('show length of cart', () => {
    const product1 = { id: 1, name: 'Product 1', price: 10 };
    const product2 = { id: 2, name: 'Product 2', price: 20 };
    service.addToCart(product1);
    service.addToCart(product2);
    expect(service.getItems().length).toEqual(2);
  });


  it('show index of cart', () => {
    const product1 = { id: 1, name: 'Product 1', price: 10 };
    const product2 = { id: 2, name: 'Product 2', price: 20 };
    service.addToCart(product1);
    service.addToCart(product2);
    expect(service.getItems()[0].name).toEqual('Product 1');
  });

});
