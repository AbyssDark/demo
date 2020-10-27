import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  product$:Observable<IProduct>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService) { }

  ngOnInit() {

    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.productService.getProductById(Number.parseInt(params.get('id')))
        ));
    
  }
}
