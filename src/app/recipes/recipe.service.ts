import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private shoppingListService : ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is a simple test', 
    'https://www.shutterstock.com/image-vector/recipe-cards-red-pen-600w-141464869.jpg',
     [ new Ingredient ('Oranges' , 2),
      new Ingredient ('Cheese', 1)
    ]),
    new Recipe('A New Test Recipe', 'This is new  a simple test', 
    'https://www.shutterstock.com/image-vector/recipe-cards-red-pen-600w-141464869.jpg',
    [new Ingredient ('Banans' , 4),
      new Ingredient ('Mayo', 3)
    ])
    ];

   getRecipes()
   {
      return this.recipes.slice();
   }
   
   getRecipe(index : number)
   {
      return this.recipes[index];
   }

   addIngredientToShoppingList(ingredients : Ingredient[])
   {
      this.shoppingListService.addIngredients(ingredients);
   }
}
