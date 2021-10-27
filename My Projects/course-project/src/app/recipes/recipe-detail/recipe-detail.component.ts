import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  yourRecipe: Recipe;
  id: number;

  constructor(private recipeListService: RecipeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.yourRecipe = this.recipeListService.getRecipe(this.id);
      }
    )
  }

  onToShoppingList() {
    this.recipeListService.addToShoppingList(this.yourRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }

  onDelete() {
    this.recipeListService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }
}
