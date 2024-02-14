import { Injectable } from '@angular/core';
import { IProduct } from '../module/IProduct';
import { Iarea } from '../module/Iarea';
import { Imeal } from '../module/Imeal';

@Injectable({
  providedIn: 'root',
})
export class YummyService {
  prd?: IProduct[];
  country?: Iarea[];
  mealList?: Imeal[];
  meal?: Imeal;
  constructor() {
    this.prd = [
      {
        idCategory: '1',
        strCategory: 'Beef',
        strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
        strCategoryDescription:
          'Beef is the culinary name for meat from cattle, pa… high-quality protein and essential nutrients.[2]',
      },
      {
        idCategory: '2',
        strCategory: 'Chicken',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/chicken.png',
        strCategoryDescription:
          'Chicken is a type of domesticated fowl, a subspeci…h their meat and eggs) and, more rarely, as pets.',
      },
      {
        idCategory: '3',
        strCategory: 'Dessert',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/dessert.png',
        strCategoryDescription:
          'Dessert is a course that concludes a meal. The cou…that are more commonly savory to create desserts.',
      },
      {
        idCategory: '4',
        strCategory: 'Lamb',
        strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
        strCategoryDescription:
          'Lamb, hogget, and mutton are the meat of domestic …efer to goat meat in the Indian subcontinent.\r\n\r\n',
      },
      {
        idCategory: '5',
        strCategory: 'Miscellaneous',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/miscellaneous.png',
        strCategoryDescription:
          "General foods that don't fit into another category",
      },
      {
        idCategory: '6',
        strCategory: 'Pasta',
        strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
        strCategoryDescription:
          'Pasta is a staple food of traditional Italian cuis…es, dried (pasta secca) and fresh (pasta fresca).',
      },
      {
        idCategory: '7',
        strCategory: 'Pork',
        strCategoryThumb: 'https://www.themealdb.com/images/category/pork.png',
        strCategoryDescription:
          'Pork is the culinary name for meat from a domestic…n Israel and illegal in certain Muslim countries.',
      },
      {
        idCategory: '8',
        strCategory: 'Seafood',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/seafood.png',
        strCategoryDescription:
          'Seafood is any form of sea life regarded as food b…s, this article includes all edible aquatic life.',
      },
      {
        idCategory: '9',
        strCategory: 'Side',
        strCategoryThumb: 'https://www.themealdb.com/images/category/side.png',
        strCategoryDescription:
          'A side dish, sometimes referred to as a side order…ly at dinner parties with Middle Eastern dishes).',
      },
      {
        idCategory: '10',
        strCategory: 'Starter',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/starter.png',
        strCategoryDescription:
          'An entrée in modern French table service and that …service consisted only of dessert.[3]:3–11 :13–25',
      },
      {
        idCategory: '11',
        strCategory: 'Vegan',
        strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
        strCategoryDescription:
          'Veganism is both the practice of abstaining from t…ls is environmentally damaging and unsustainable.',
      },
      {
        idCategory: '12',
        strCategory: 'Vegetarian',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/vegetarian.png',
        strCategoryDescription:
          'Vegetarianism is the practice of abstaining from t…ther or silk clothing, and goose-fat shoe polish.',
      },
      {
        idCategory: '13',
        strCategory: 'Breakfast',
        strCategoryThumb:
          'https://www.themealdb.com/images/category/breakfast.png',
        strCategoryDescription:
          'Breakfast is the first meal of a day. The word in …nd ingredients are now associated with breakfast.',
      },
      {
        idCategory: '14',
        strCategory: 'Goat',
        strCategoryThumb: 'https://www.themealdb.com/images/category/goat.png',
        strCategoryDescription:
          'The domestic goat or simply goat (Capra aegagrus h…Milk from goats is often turned into goat cheese.',
      },
    ];

    this.country = [
      { strArea: 'American' },
      { strArea: 'British' },
      { strArea: 'Canadian' },
      { strArea: 'Chinese' },
      { strArea: 'Croatian' },
      { strArea: 'Dutch' },
      { strArea: 'Egyptian' },
      { strArea: 'Filipino' },
      { strArea: 'French' },
      { strArea: 'Greek' },
      { strArea: 'Indian' },
      { strArea: 'Irish' },
      { strArea: 'Italian' },
      { strArea: 'Jamaican' },
      { strArea: 'Japanese' },
      { strArea: 'Kenyan' },
      { strArea: 'Malaysian' },
      { strArea: 'Mexican' },
      { strArea: 'Moroccan' },
      { strArea: 'Polish' },
      { strArea: 'Portuguese' },
      { strArea: 'Russian' },
      { strArea: 'Spanish' },
      { strArea: 'Thai' },
      { strArea: 'Tunisian' },
      { strArea: 'Turkish' },
    ];
    this.mealList = [
      {
        strMeal: 'BeaverTails',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
        id: 1,
      },
      {
        strMeal: 'Breakfast Potatoes',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/1550441882.jpg',
        id: 2,
      },
      {
        strMeal: 'Canadian Butter Tarts',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
        id: 3,
      },
      {
        strMeal: 'Montreal Smoked Meat',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg',
        id: 4,
      },
      {
        strMeal: 'Nanaimo Bars',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/vwuprt1511813703.jpg',
        id: 5,
      },
      {
        strMeal: 'Pate Chinois',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/yyrrxr1511816289.jpg',
        id: 6,
      },
      {
        strMeal: 'Pouding chomeur',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg',
        id: 7,
      },
      {
        strMeal: 'Poutine',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
        id: 8,
      },
      {
        strMeal: 'Rappie Pie',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
        id: 9,
      },
      {
        strMeal: 'Split Pea Soup',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg',
        id: 10,
      },
      {
        strMeal: 'Sugar Pie',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg',
        id: 11,
      },
      {
        strMeal: 'Timbits',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
        id: 12,
      },
      {
        strMeal: 'Tourtiere',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg',
        id: 13,
      },
    ];
  }
  getMealById(id: any) {
    this.meal = this.mealList?.find((el) => {
      return el.id == id;
    });
    return this.meal;
  }
  // let foundPrd = this.prdListServices.find((prd) => prd.id == pId);
  //   return foundPrd ? foundPrd : null;
}
