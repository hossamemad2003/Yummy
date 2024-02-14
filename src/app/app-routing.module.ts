import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { AreaComponent } from './components/area/area.component';
import { ContactComponent } from './components/contact/contact.component';
import { MealComponent } from './components/meal/meal.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/categorie', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'area', component: AreaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'meal', component: MealComponent },
  { path: 'detail/:id', component: MealDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
