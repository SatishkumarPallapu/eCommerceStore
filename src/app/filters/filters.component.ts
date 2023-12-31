import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  @Output() redColor: EventEmitter<any> = new EventEmitter<any>();
  @Output() blueColor: EventEmitter<any> = new EventEmitter<any>();
  @Output() greenColor: EventEmitter<any> = new EventEmitter<any>();
  @Output() maleGender: EventEmitter<any> = new EventEmitter<any>();
  @Output() femaleGender: EventEmitter<any> = new EventEmitter<any>();
  @Output() lowPrice: EventEmitter<any> = new EventEmitter<any>();
  @Output() mediumPrice: EventEmitter<any> = new EventEmitter<any>();
  @Output() highPrice: EventEmitter<any> = new EventEmitter<any>();
  @Output() poloType: EventEmitter<any> = new EventEmitter<any>();
  @Output() hoodieType: EventEmitter<any> = new EventEmitter<any>();
  @Output() basicType: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterColorRed(event: any) {
    this.redColor.emit({ red: event.target.value, status: event.target.checked })
  }

  onFilterColorBlue(event: any) {
    // this.blueColor.emit(event.target.value)
    this.blueColor.emit({ blue: event.target.value, status: event.target.checked })
  }

  onFilterColorGreen(event: any) {
    // this.greenColor.emit(event.target.value)
    this.greenColor.emit({ green: event.target.value, status: event.target.checked })
  }

  onFilterMaleGender(event: any) {
    // this.maleGender.emit(event.target.value)
    this.maleGender.emit({ male: event.target.value, status: event.target.checked })
  }

  onFilterFemaleGender(event: any) {
    // this.femaleGender.emit(event.target.value)
    this.femaleGender.emit({ female: event.target.value, status: event.target.checked })
  }

  onChangePriceLow(event: any) {
    this.lowPrice.emit({ low: event.target.value, status: event.target.checked })
  }
  onChangePriceMedium(event: any) {
    this.mediumPrice.emit({ medium: event.target.value, status: event.target.checked })
  }
  onChangePriceHigh(event: any) {
    this.highPrice.emit({ high: event.target.value, status: event.target.checked })
  }

  onChangeTypePolo(event: any) {
    this.poloType.emit({ polo: event.target.value, status: event.target.checked })
  }

  onChangeTypeHoodie(event: any) {
    this.hoodieType.emit({ hoodie: event.target.value, status: event.target.checked })
  }

  onChangeTypeBasic(event: any) {
    this.basicType.emit({ basic: event.target.value, status: event.target.checked })

  }
}
