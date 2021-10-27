import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map, take} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";
import {exhaustMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-project-563b3-default-rtdb.firebaseio.com/recipes.json',
      recipes).subscribe(
        response => {
          console.log(response);
        }
    );
  }

  fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-project-563b3-default-rtdb.firebaseio.com/recipes.json'
      ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        })
      }))
    .subscribe(
      recipes => {
        // console.log(recipes);
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
