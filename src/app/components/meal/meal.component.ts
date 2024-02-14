import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Imeal } from 'src/app/module/Imeal';

import { YummyService } from 'src/app/services/yummy.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent {
  mealList?: Imeal[];
  constructor(private yummy: YummyService, private route: Router) {
    this.mealList = this.yummy.mealList;
  }
  gotoMealDetail(id: any) {
    this.route.navigate(['detail', id]);
  }
}
