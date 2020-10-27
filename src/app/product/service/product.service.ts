import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products:Array<Product> =  [
    {  id:1, name: 'Sony Smart TV - 2015', code: '123',description:'mo ta', price: 499, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-thumb-1.jpg' },
    {  id:2, name: 'Apple new mac book 2015', code: '124',description:'mo ta', price: 400, category: { name: 'Apple', code: '2', category: 2 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-thumb-2.jpg' },
    {  id:3, name: 'Apple new i phone 6', code: '125',description:'mo ta', price: 599, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-thumb-3.jpg' },
    {  id:4, name: 'Samsung Galaxy s5- 2015', code: '126',description:'mo ta', price: 399, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-1.jpg' },
    {  id:5, name: 'Nokia Lumia 1320', code: '127',description:'mo ta', price: 299, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-2.jpg' },
    {  id:6, name: 'LG Leon 2015', code: '128',description:'mo ta', price: 199, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-3.jpg' },
    {  id:7, name: 'Sony microsoft', code: '129',description:'mo ta', price: 699, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-4.jpg' },
    {  id:8, name: 'iPhone 6', code: '130',description:'mo ta', price: 799, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-5.jpg' },
    {  id:9, name: 'Samsung gallaxy note 4', code: '131',description:'mo ta', price: 899, category: { name: 'Sony', code: '1', category: 1 }, type: { name: 'Dien Thoai', code: '1', category: 1 }, image: '../../../assets/img/product-6.jpg' },

];

  constructor() { }

  getAllProducts():Observable<IProduct[]>{
    return of(this.products)
  }

  getProductById(id:number):Observable<IProduct>{
    var product = this.products.find(item => item.id === id);
    return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id)
    product.id = this.products.length + 1
    this.products.push(product);
  }

  deleteProduct(product:IProduct):IProduct[]{
    const index = this.products.findIndex(item => item.id === product.id);
    const deletedItem = this.products.splice(index,1);

    return deletedItem;
  }

  updateProduct(product:IProduct):void{

    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }

}
