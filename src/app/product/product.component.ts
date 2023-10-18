import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
  photoid=0;
  productid=0;
  constructor(private activatedRoute:ActivatedRoute)
  {
    this.activatedRoute.params.subscribe((parametrs)=>
    {
      //console.log(parametrs);
      const value=parametrs;
       this.photoid=value['photoid'];
       this.productid=value['productid']
      
    })
  }
  
}
