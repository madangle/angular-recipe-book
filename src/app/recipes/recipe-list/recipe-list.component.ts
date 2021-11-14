import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Chicken Biriyani', 'Biriyani Desc', "https://cdn.pixabay.com/photo/2021/02/21/18/15/biriyani-6037375_960_720.jpg"),
    new Recipe('Green Salad', 'Salad', "https://cdn.pixabay.com/photo/2021/01/10/04/37/salad-5904093_960_720.jpg"),
    new Recipe('Malai Kofta', 'Malai Desc', "https://cdn.pixabay.com/photo/2020/09/02/05/10/food-5537336_960_720.jpg"),
    new Recipe('Beef Ulathiyath', 'Ulathiyath Desc', "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
