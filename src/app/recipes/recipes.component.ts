import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Input() selectedPartOfTheApp: string;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesService.recipeWasSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }
}
