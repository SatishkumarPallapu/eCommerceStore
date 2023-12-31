import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartLen: any

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.fetchCartData().subscribe(data => {
      console.log(data)
      this.cartLen = data.length
    })
    console.log("satish", this.cartLen)
  }

}
