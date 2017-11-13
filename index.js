var recipes = {typeOf: "recipe"}
function destructivelyUpdateObjectWithKeyAndValue(recipes, typeOf, recipe) {recipes[typeOf] = recipe
return recipes}
function updateObjectWithKeyAndValue(recipes, typeOf, recipe) {return Object.assign({}, recipes, { [typeOf]: recipe })}
function destructivelyDeleteFromObjectByKey(recipes, typeOf) {Object.assign({}, recipes,typeOf); return delete recipes.typeOf}
function deleteFromObjectByKey(recipes, typeOf) {var newRecipes = Object.assign({}, recipes); return delete newRecipes.typeOf}
