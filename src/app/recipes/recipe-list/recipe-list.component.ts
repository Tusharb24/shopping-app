import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 
    'https://www.shutterstock.com/image-vector/recipe-cards-red-pen-600w-141464869.jpg'),
    new Recipe('A New Test Recipe', 'This is new  a simple test', 
    'https://www.shutterstock.com/image-vector/recipe-cards-red-pen-600w-141464869.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe : Recipe)
  {
      this.recipeWasSelected.emit(recipe);
  }

}
