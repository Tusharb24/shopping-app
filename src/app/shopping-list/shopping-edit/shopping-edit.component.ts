import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameText', {static :false}) nameInputRef !: ElementRef;
  @ViewChild('amountText', {static :false}) amountInputRef !: ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onShoppingListAdd()
  {
    const nameRef = this.nameInputRef.nativeElement.value;
    const amountRef = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameRef, amountRef);
    this.itemAdded.emit(newIngredient);
  }

}
