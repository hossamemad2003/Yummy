import { Component } from '@angular/core';
import { IProduct } from 'src/app/module/IProduct';
import { YummyService } from 'src/app/services/yummy.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent {
  prd?: IProduct[];
  constructor(private yummy: YummyService) {
    this.prd = this.yummy.prd;
  }
}
