import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = []
  red: any
  blue: any
  green: any
  colorsArray: any = []
  // redProducts = []
  filteredProducts = []
  selectedType = [];
  selectedColor = [];
  selectedPrice = [];
  selectedGender = [];
  constructor(private productService: ProductsService) { }
  productQuantity: number = 0

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data
    })
  }

  onAddToCartButton(product: any) {
    this.productQuantity++
    this.products.filter(data => {
      if (product.id === data.id) {
        product['productQuantity'] = this.productQuantity
      }
    })
    this.productService.addToItemsToCart(product)
  }

  applyColorFilter(color: any, status: any) {
    console.log(color, status)
    this.filteredProducts = this.products.filter(product => {
      return this.selectedColor.includes(product.color)
    })
    console.log(this.filteredProducts, "added")
  }

  applyGenderFilter(gender: any, status: any) {
    console.log(gender, status)
    this.filteredProducts = this.filteredProducts.filter(product => {
      return this.selectedGender.includes(product.gender)
    })
    console.log(this.filteredProducts, "added")
  }

  removeColorFilter(color: any) {
    if (this.selectedGender.length < 1 && this.selectedColor.length < 1) {
      this.filteredProducts = this.products
    } else {
      this.filteredProducts = this.filteredProducts.filter(product => {
        if (this.selectedColor.includes(product.color)) {
          return product
        }
      })
    }
  }

  removeGenderFilter(gender: any) {

    this.filteredProducts = this.filteredProducts.filter(product => {
      if (this.selectedGender.includes(product.gender)) {
        return product
      }
    })
  }


  filterRedColor(obj: any) {

    if (obj.status) {
      this.selectedColor.push(obj.red)
      this.applyColorFilter(obj.red, obj.status)
    } else {
      this.selectedColor.splice(this.selectedColor.indexOf(obj.red), 1)
      this.removeColorFilter(obj.red)
    }
  }

  filterBlueColor(obj: any) {

    if (obj.status) {
      this.selectedColor.push(obj.blue)
      this.applyColorFilter(obj.blue, obj.status)
    } else {
      this.selectedColor.splice(this.selectedColor.indexOf(obj.blue), 1)
      this.removeColorFilter(obj.red)
    }
  }

  filterGreenColor(obj: any) {
    if (obj.status) {
      this.selectedColor.push(obj.green)
      this.applyColorFilter(obj.green, obj.status)
    } else {
      this.selectedColor.splice(this.selectedColor.indexOf(obj.green), 1)
      this.removeColorFilter(obj.green)
    }
  }

  filteredMaleGender(obj: any) {
    // // this.products = this.products.filter(data => data.gender === obj.male)
    // this.products = this.products.filter(data => {
    //   if (data.gender === obj.male && obj.status) {
    //     return data
    //   } else if (!obj.status) {
    //     this.fetchProducts()
    //   }
    // })

    if (obj.status) {
      this.selectedGender.push(obj.male)
      this.applyGenderFilter(obj.male, obj.status)
    } else {
      this.selectedGender.splice(this.selectedGender.indexOf(obj.male), 1)
      this.removeGenderFilter(obj.male)
    }
  }

  filteredFemaleGender(obj: any) {
    // this.products = this.products.filter(data => data.gender === obj.female)
    this.products = this.products.filter(data => {
      if (data.gender === obj.female && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }

  filterByLowPrice(obj: any) {
    // this.products = this.products.filter(data => data.gender === obj.male)
    this.products = this.products.filter(data => {
      if ((data.price > obj.low && data.price <= 250) && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }

  filterByMediumPrice(obj: any) {
    this.products = this.products.filter(data => {
      if ((data.price > 250 && data.price <= 450) && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }

  filterByHighPrice(obj: any) {
    this.products = this.products.filter(data => {
      if (data.price > obj.high && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }

  filterbyPoloType(obj: any) {
    this.products = this.products.filter(data => {
      if (data.type === obj.polo && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }
  filterbyHoodieType(obj: any) {
    this.products = this.products.filter(data => {
      if (data.type === obj.hoodie && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }
  filterbyBasicType(obj: any) {
    this.products = this.products.filter(data => {
      if (data.type === obj.basic && obj.status) {
        return data
      } else if (!obj.status) {
        this.fetchProducts()
      }
    })
  }
}
