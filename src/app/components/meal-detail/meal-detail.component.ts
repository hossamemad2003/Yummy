import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imeal } from 'src/app/module/Imeal';
import { YummyService } from 'src/app/services/yummy.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss'],
})
export class MealDetailComponent {
  id?: any;
  meal?: Imeal;
  constructor(
    private yummy: YummyService,
    private activate: ActivatedRoute,
    private location: Location
  ) {
    this.activate.paramMap.subscribe((res) => {
      this.id = res.get('id');

      this.meal = this.yummy.getMealById(this.id);
    });
  }

  back() {
    this.location.back();
  }
}
