import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchTerm: string = "";
  foodInfo: any; // Objekt pro uchování informací o potravině

  constructor() {}

  searchFood() {
    // Simulace vyhledávání informací o potravině (můžeš nahradit vlastní logikou/API voláním)
    this.foodInfo = {
      name: this.searchTerm,
      calories: 100,
      proteins: 10,
      carbs: 20,
      fats: 5,
    };
  }
}
