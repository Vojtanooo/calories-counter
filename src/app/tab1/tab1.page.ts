import { Component } from '@angular/core';
import { FoodAPIService } from '../api/food-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  searchTerm: string = "";
  foodInfo: any; // Objekt pro uchování informací o potravině

  constructor(private apiService: FoodAPIService) {}

  searchFood() {
    this.apiService.getFood(this.searchTerm).subscribe(
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
