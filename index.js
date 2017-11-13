var recipes = {typeOf: "recipe"}
function destructivelyUpdateObjectWithKeyAndValue(recipes, typeOf, recipe) {recipes[typeOf] = recipe
return recipes}
function updateObjectWithKeyAndValue(recipes, typeOf, recipe) {return Object.assign({}, recipes, { [typeOf]: recipe })}
function destructivelyDeleteFromObjectByKey(recipes, typeOf) {return Object.delete ({}, recipes, {([typeOf]})}
