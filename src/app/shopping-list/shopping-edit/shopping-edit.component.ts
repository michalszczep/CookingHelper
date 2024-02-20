import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output( )addIngredient = new EventEmitter<Ingredient>();
  onAddIngredient(nameInput, amountInput) {
    this.addIngredient.emit(new Ingredient(nameInput.value, amountInput.value));
  }
}
