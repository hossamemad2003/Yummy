import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/search/search.component';
import { AreaComponent } from './components/area/area.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealComponent } from './components/meal/meal.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchComponent,
    AreaComponent,
    CategorieComponent,
    ContactComponent,
    MealComponent,
    MealDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
