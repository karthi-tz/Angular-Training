import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('form') myForm!: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.myForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmitIngredient() {
    const value = this.myForm.value;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, {name: value.name, amount: value.amount});
    } else {
      this.shoppingListService.addIngredient({name: value.name, amount: value.amount});
    }
    this.editMode = false;
    this.myForm.reset();
  }

  onClear() {
    this.editMode = false;
    this.myForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
