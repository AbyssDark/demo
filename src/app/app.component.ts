import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Do An';
  searchText;
  prod = [
    {  id:1, name: 'Sony Smart TV - 2015', code: '123', price: 499,  image: '../../../assets/img/product-thumb-1.jpg' },
    {  id:2, name: 'Apple new mac book 2015', code: '124', price: 400, image: '../../../assets/img/product-thumb-2.jpg' },
    {  id:3, name: 'Apple new i phone 6', code: '125', price: 599,  image: '../../../assets/img/product-thumb-3.jpg' },
    {  id:4, name: 'Samsung Galaxy s5- 2015', code: '126', price: 399,  image: '../../../assets/img/product-1.jpg' },
    {  id:5, name: 'Nokia Lumia 1320', code: '127', price: 299, image: '../../../assets/img/product-2.jpg' },
    {  id:6, name: 'LG Leon 2015', code: '128', price: 199,   image: '../../../assets/img/product-3.jpg' },
    {  id:7, name: 'Sony microsoft', code: '129', price: 699,  image: '../../../assets/img/product-4.jpg' },
    {  id:8, name: 'iPhone 6', code: '130', price: 799,  image: '../../../assets/img/product-5.jpg' },
    {  id:9, name: 'Samsung gallaxy note 4', code: '131', price: 899,  image: '../../../assets/img/product-6.jpg' },
  ];
  order: string = 'name';
  reverse: boolean = false;


  sortedCollection: any[];
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.prod, 'name');
    console.log(this.sortedCollection);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
