import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  constructor() { }

  ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Potatoes', 2)
  ]

  getIngredients()
  {
      return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient)
  {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients : Ingredient[])
  {
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}