import { Lookup } from './lookup';
export interface IProduct{
    id:number;
    name:string;
    code:string;
    description:string;
    price:number;
    category:Lookup;
    type:Lookup
    image:string
    
}
export class Product {
    id:number;
    name:string;
    code:string;
    description:string;
    price:number;
    category:Lookup;
    type:Lookup
    image:string
    constructor(name?:string,code?:string,description?:string, price?:number,category?:Lookup,type?:Lookup,image?:string){
        this.name = name;
        this.code = code;
        this.description = description;
        this.price = price;
        this.category = category;
        this.type = type;
        this.image = image;
    }
}
