import { Component } from '@angular/core';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  storedData: Array<string> = [];
  totalCalories: number = 0;
  totalProtein: number = 0;
  totalCarbohydrates: number = 0;
  totalFats: number = 0;
  lastUpdatedDate: Date | null = null;

  constructor(private storage: HistoryServiceService) {}

  splitHistoryString(historyString: string) {
    const parts = historyString.split(', ');

    const name = parts[0].split(': ')[1];
    const protein = parseFloat(parts[1].split(': ')[1]);
    const calories = parseFloat(parts[2].split(': ')[1]);
    const carbohydrates = parseFloat(parts[3].split(': ')[1]);
    const fats = parseFloat(parts[4].split(': ')[1]);
  
    console.log('Name:', name);
    console.log('Protein:', protein);
    console.log('Calories:', calories);
    console.log('Carbohydrates:', carbohydrates);
    console.log('Fats:', fats);

    this.totalProtein += protein;
    this.totalCalories += calories;
    this.totalCarbohydrates += carbohydrates;
    this.totalFats += fats;

    this.lastUpdatedDate = new Date();
  }

  async ionViewDidEnter() {
    const currentDate = new Date();
    
    if (!this.lastUpdatedDate || !this.areDatesEqual(currentDate, this.lastUpdatedDate)) {
      this.totalProtein = 0;
      this.totalCalories = 0;
      this.totalCarbohydrates = 0;
      this.totalFats = 0;
    }

    const storedData = await this.storage.get('history');
    if (storedData) {
      this.storedData = storedData;
      console.log('Stored data:', storedData);
      
      storedData.forEach((historyString: any) => {
        this.splitHistoryString(historyString);
      });
    }
  };

  areDatesEqual(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  }
}