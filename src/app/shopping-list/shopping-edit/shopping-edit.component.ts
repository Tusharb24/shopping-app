import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameText', {static :false}) nameInputRef !: ElementRef;
  @ViewChild('amountText', {static :false}) amountInputRef !: ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit( ){
  }

  onShoppingListAdd()
  {
    const nameRef = this.nameInputRef.nativeElement.value;
    const amountRef = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameRef, amountRef);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
