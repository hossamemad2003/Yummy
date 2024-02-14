import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Imeal } from 'src/app/module/Imeal';
import { YummyService } from 'src/app/services/yummy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  mealList?: Imeal[];
  filterMealList?: Imeal[];
  searchForm: FormGroup;
  mealName: string = '';
  mealLetter: string = '';
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private yummy: YummyService
  ) {
    this.mealList = this.yummy.mealList;
    this.searchForm = fb.group({
      name: [''],
      firstLetter: [''],
    });
  }
  get name() {
    return this.searchForm.get('name');
  }
  get letter() {
    return this.searchForm.get('firstLetter');
  }
  filterMealByName() {
    this.filterMealList = [];
    this.filterMealList = this.mealList?.filter((el) => {
      return el.strMeal.includes(this.mealName) == true && this.mealName != '';
    });
    console.log(this.mealName);
    console.log(this.filterMealList);
  }
  filterMealByLetter() {
    this.filterMealList = [];
    this.filterMealList = this.mealList?.filter((el) => {
      return (
        el.strMeal.toUpperCase().startsWith(this.mealLetter) == true ||
        (el.strMeal.toLowerCase().startsWith(this.mealLetter) == true &&
          this.mealLetter != '')
      );
    });
    console.log(this.mealLetter);
    console.log(this.filterMealList);
  }

  gotoMealDetail(id: any) {
    this.route.navigate(['detail', id]);
  }
}
