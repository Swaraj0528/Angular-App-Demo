import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any
  constructor() {
    this.product = [
      {
        "id": 1,
        "name": "Naruto",
        "brand": "Konha",
        "gender": "Male"
      },
      {
        "id": 2,
        "name": "Sasuke",
        "brand": "Trator",
        "gender": "Male"
      },
      {
        "id": 3,
        "name": "Sakura",
        "brand": "Medic",
        "gender": "Female"
      },
      {
        "id": 4,
        "name": "Kakshi",
        "brand": "Jonin",
        "gender": "Male"
      }
    ]
  }

  ngOnInit(): void {
  }

}
