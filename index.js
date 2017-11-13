var recipes = {typeOf: "recipe"}
function destructivelyUpdateObjectWithKeyAndValue(recipes, typeOf, recipe) {recipes[typeOf] = recipe
return recipes}
function updateObjectWithKeyAndValue(recipes, typeOf, recipe) {return recipes.assign({}, recipes, { [typeOf]: recipe })}
