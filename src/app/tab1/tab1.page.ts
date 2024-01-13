import { Component } from '@angular/core';
import { FoodAPIService } from '../api/food-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  searchTerm: string = "";
  weight: number = 0;
  foodInfo: any[] = [];

  constructor(private apiService: FoodAPIService) {}

  searchFood() {
    this.apiService.getFood(`${this.weight}g ${this.searchTerm}`).subscribe(
      (result) => {
        this.foodInfo = result;
        console.log('Food info:', this.foodInfo);
      },
      (error) => {
        console.error('Error:', error);
    }
    );
  }
}
