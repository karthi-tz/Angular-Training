import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 45),
    new Ingredient('Mangoes', 65),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(theIngredient: Ingredient) {
    this.ingredients.push(theIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    // console.log(this.ingredients);
  }

  addIngredients(theIngredients: Ingredient[]) {
    this.ingredients.push(...theIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
