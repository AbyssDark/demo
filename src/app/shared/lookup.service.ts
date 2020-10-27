import { Injectable } from '@angular/core';
import { Lookup } from '../product/models/lookup';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private type: Array<Lookup> =[
    {name:'Dien Thoai', code:"1", category:1},
    {name:'Laptop', code:"2", category:1},
    {name:'Tai Nghe', code:"3", category:1},
    {name:'Sac', code:"4", category:1}
  ];


  private productCategories:Array<Lookup> = [
    {name:'Sony', code:"1", category:1},
    {name:'Apple', code:"2", category:1},
    {name:'SamSung', code:"3", category:1},
    {name:'Oppo', code:"4", category:1}
  ];


  constructor() { }

  getProductCategories(): Observable<Lookup[]>{
    return of(this.productCategories);
  }

  getType():Observable<Lookup[]>{
    return of(this.type);
  }
}
