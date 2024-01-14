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
  activityLevel?: string;
  caloriesResult?: number;

  calculateCalories() {
    if (this.weight && this.height && this.age && this.gender && this.activityLevel) {
      let bmr: number;
      if (this.gender === 'male') {
        bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
      } else {
        bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
      }
      let activityFactor: number;
      switch (this.activityLevel) {
        case 'sedentary':
          activityFactor = 1.2;
          break;
        case 'lightlyActive':
          activityFactor = 1.375;
          break;
        case 'moderatelyActive':
          activityFactor = 1.55;
          break;
        case 'veryActive':
          activityFactor = 1.725;
          break;
        case 'extraActive':
          activityFactor = 1.9;
          break;
        default:
          activityFactor = 1.2;
          break;
      }

      const tdee = bmr * activityFactor;
      this.caloriesResult = tdee;
    } else {
      this.caloriesResult = 0;
    }
  }
}
