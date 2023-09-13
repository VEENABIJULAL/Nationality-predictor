import { Component } from '@angular/core';
import { NationalityService } from '../nationality.service';

@Component({
  selector: 'app-predict-nationality',
  templateUrl: './predict-nationality.component.html',
  styleUrls: ['./predict-nationality.component.css']
})
export class PredictNationalityComponent {
  name: string = '';
  predictions: any[] = [];

  constructor(private nationalityService: NationalityService) {}
  predictNationality() {
    if (this.name.trim() === '') {
      return;
    }

    this.nationalityService.predictNationality(this.name)
      .subscribe((data: any) => {
        this.predictions = data.country.map((item: any) => ({
          country: item.country_id,
          probability: item.probability.toFixed(2)
        }));
        console.log(this.predictions)
      });
  }
}
