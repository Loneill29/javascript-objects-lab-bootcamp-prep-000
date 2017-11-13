var recipes = {typeOf: "recipe"}
function destructivelyUpdateObjectWithKeyAndValue(recipes, typeOf, recipe) {recipes[typeOf] = recipe
return recipes}
function updateObjectWithKeyAndValue(recipes, typeOf, recipe) {return Object.assign({}, recipes, { [typeOf]: recipe })}
function deleteFromObjectByKey(recipes, typeOf) {var newRecipes = Object.assign({}, recipes); return delete newRecipes.typeOf}
function destructivelyDeleteFromObjectByKey(recipes, typeOf) {recipes[typeOf] = 1; return delete recipes.typeOF} 
