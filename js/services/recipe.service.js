let RecipeService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/recipe';

  let checkAuth = function () {
    return true;
  };

  this.getRecipes = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getRecipe = function (whiskeyId) {
    if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + recipeId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let Recipe = function (obj) {
    this.title = obj.title;
    this.photo = obj.photo;
    this.value = obj.value;
    this.serving = obj.serving;
    this.yield = obj.yield;
    this.ingredients = obj.ingredients;
    this.instructions = obj.instructions;
    this.notes = obj.notes;
  };

  this.addRecipe = function (obj) {
    let r = new Recipe(obj);
    return $http.post(url, r, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};
RecipeService.$inject = ['$http', 'PARSE'];

export default RecipeService;