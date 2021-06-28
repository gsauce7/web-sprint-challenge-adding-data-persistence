// build your `Project` model here
const db = require("../../data/db-config.js")


async function getRecipeById(recipe_id) {
    const allRecipes = await db("recipes as r")
        .join("steps as s", "s.recipe_id", "r.recipe_id")
        .leftJoin("ingredients_for_recipe_steps as ifrs", "ifrs.step_id", "s.step_id")
        .leftJoin("ingredients as i", "i.ingredient_id", "ifrs.ingredient_id")
        .select(
            "r.recipe_id",
            "r.recipe_name",
            "s.step_id",
            "s.step_number",
            "s.step_instructions",
            "i.ingredient_id",
            "i.ingredient_name",
            "ifrs.ingredient_quantity"
        )
        .where("r.recipe_id", recipe_id)
        .orderBy("s.step_number", "asc")

    const recipeObject = {};
    allRecipes.forEach(row => {
        if (!recipeObject.recipe_id || !recipeObject.recipe_name) {
            recipeObject.recipe_id = row.recipe_id;
            recipeObject.recipe_name = row.recipe_name;
            recipeObject.steps = []
        }
        if (!recipeObject.steps[row.step_number - 1] && row.step_id) {
            recipeObject.steps.push({
                "step_id": row.step_id,
                "step_number": row.step_number,
                "step_instructions": row.step_instructions,
                "ingredients": [],
            })
        }
        if (row.ingredient_id) {
            recipeObject.steps[row.step_number - 1].ingredients.push({
                "ingredient_id": row.ingredient_id,
                "ingredient_name": row.ingredient_name,
                "ingredient_quantity": row.ingredient_quantity
            })
        }
    })

    return recipeObject;
};

module.exports = { getRecipeById }