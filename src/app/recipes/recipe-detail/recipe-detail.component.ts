import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe : Recipe
  index: number;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
        this.recipe = recipesService.getRecipe(this.index);
      }
    )
  }
}
