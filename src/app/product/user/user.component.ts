import { Component, OnInit } from '@angular/core';
import { Product, IProduct } from '../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public products:Observable<IProduct[]> = null;
  constructor(
    private router: Router,
    private productService:ProductService) { }
  ngOnInit() {
      this.products = this.productService.getAllProducts()
  }
}
