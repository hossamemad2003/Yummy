import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Iarea } from 'src/app/module/Iarea';
import { YummyService } from 'src/app/services/yummy.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent {
  country?: Iarea[];
  constructor(private yummy: YummyService, private route: Router) {
    this.country = this.yummy.country;
  }
  gotoMeal() {
    this.route.navigate(['/meal']);
  }
}
