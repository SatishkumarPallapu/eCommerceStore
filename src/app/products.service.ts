import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsData: any[] = []

  cartData: any[] = []
  cartLength: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {
    this.fetchCartData()
  }



  getProducts(): Observable<any> {
    return this.http.get<any>('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
  }

  addToItemsToCart(data: any) {
    this.cartData.push(data)
  }

  fetchCartData() {
    return of(...this.cartData)
  }

  onDeleteCartItem(cartItem: any) {
    this.cartData = this.cartData.filter(data => data.id !== cartItem.id)
    this.fetchCartData()
  }


}
