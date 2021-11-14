import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public checkoutlist:any=[];
getotal:any;
public productlist= new BehaviorSubject<any>([]);
  constructor() { }

  getItems(){
    return this.productlist.asObservable();
  }

  setItems(product:any){
    this.checkoutlist.push(...product);
    this.productlist.next(product);
  }

  addtocart(product:any){
    this.checkoutlist.push(product);
    this.productlist.next(this.checkoutlist);
    console.log(this.checkoutlist);
    this.gettotal();
  }

  gettotal(){
let grandtotal=0;
this.checkoutlist.map((a:any, index:any)=>{
  grandtotal += a.total;
})
  }
removeitem(product:any){
  this.checkoutlist.map((a:any, index:any)=>{

    if(product.id===a.id){
      this.checkoutlist.splice(index,1);
    }
  })
}
  }
