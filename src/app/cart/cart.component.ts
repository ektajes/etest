import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cs:CartService) { }
items:any;
grandTotal:any;
  ngOnInit(): void {
    this.cs.getItems().subscribe(res=>{
this.items=res;
this.grandTotal=this.cs.gettotal();
    })
  }
deleteitem(item:any){
  this.cs.removeitem(item);
}
}
