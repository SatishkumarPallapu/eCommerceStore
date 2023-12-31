import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: any[] = []
  total: any
  itemCostsArray: any[] = [{ id: 1, price: 350, quantity: 2 }, { id: 2, price: 450, quantity: 4 }]
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCart()
  }

  fetchCart() {
    this.productService.fetchCartData().subscribe((data: any[]) => {
      this.cartData.push(data)
      this.cartData.forEach(res => {
        this.total = this.total + res.price
      })
    })
    // console.log(this.total)
  }

  getProductsQuantity(quantity: any) {
    return Array.from({ length: quantity }, (_, index) => index + 1)
  }

  updateTheQuantity(event: any, data: any) {
    this.total = data[0].price * event.target.value
    this.itemCostsArray.filter(item => {
      if (data[0].id !== item.id) {
        return this.itemCostsArray.push({
          id: data[0].id,
          price: data[0].price,
          quantity: event.target.value
        })
      } else {
        return item.quantity = event.target.value
      }
    })
    console.log(this.itemCostsArray)
  }

  onClickDeleteCartItem(cartItem: any) {
    // console.log(cartItem.id)
    this.productService.onDeleteCartItem(cartItem)
    this.cartData = this.cartData.filter(data => data.id !== cartItem.id)
  }

  navigateToProducts() {
    this.router.navigate(['/products'])
  }
}
