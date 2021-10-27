import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tomato Rice',
  //     'Tastes good!',
  //     'https://i.ytimg.com/vi/mePb5Q5I7AU/maxresdefault.jpg',
  //     [
  //       new Ingredient('Tomato', 35),
  //       new Ingredient('Rice', 1000)
  //       ]
  //   ),
  //   new Recipe(
  //     'Schezwan Egg Noodles',
  //     'Hot & spicy',
  //     'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ovo6gg8vviimplzi_1585583296.jpeg',
  //     [
  //       new Ingredient('Egg', 4),
  //       new Ingredient('Masala', 56),
  //       new Ingredient('Noodles', 200)
  //     ]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }
}
