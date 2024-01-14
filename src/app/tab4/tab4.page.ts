import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  weight?: number;
  height?: number;
  age?: number;
  gender?: string;
  caloriesResult?: number;

  calculateCalories() {
    if (this.weight && this.height && this.age && this.gender) {
      let bmr: number;
      if (this.gender === 'male') {
        bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
      } else {
        bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
      }
      const tdee = bmr * 1.2;
      this.caloriesResult = tdee;
    } else {
      this.caloriesResult = 0;
    }
  }

}
