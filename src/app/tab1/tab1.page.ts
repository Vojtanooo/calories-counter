import { Component } from '@angular/core';
import { FoodAPIService } from '../api/food-api.service';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  searchTerm: string = "";
  weight?: number;
  foodInfo: any[] = [];
  historyArray: any[] = [];


  constructor(
    private apiService: FoodAPIService,
    private storage: HistoryServiceService) {}

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

  saveFood(food: any) {
    console.log('Saving food:', food);
    this.storage.set('history', food);
    console.log('Saving food2:', this.storage.get('history'));
    // Po uložení refreshnout stránku
    setTimeout(() => {
      //location.reload();
    }, 500); // Počkejte 1 sekundu (1000 ms) a pak refreshněte stránku
  }
}