import { Component } from '@angular/core';
import { HistoryServiceService } from '../storage/history-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  storedData: Array<any> = [];

  constructor(private storage: HistoryServiceService) {}

  async ionViewDidEnter() {
    const storedData = await this.storage.get('history');
    if (storedData) {
      this.storedData = storedData;
      console.log('Stored data:', this.storedData);
    }
  };
}
