import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test', 'Sample Desc', "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),
    new Recipe('A test', 'Sample Desc', "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),
    new Recipe('A test', 'Sample Desc', "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"),
    new Recipe('A test', 'Sample Desc', "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg")
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
