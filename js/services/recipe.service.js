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

  this.getRecipe = function (recipeId) {
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
    this.servingSize = obj.servingSize;
    this.yield = obj.yield;
    this.ingredient1 = obj.ingredient1;
    this.ingredient2 = obj.ingredient2;
    this.ingredient3 = obj.ingredient3;
    this.ingredient4 = obj.ingredient4;
    this.ingredient5 = obj.ingredient5;
    this.ingredient6 = obj.ingredient6;
    this.ingredient7 = obj.ingredient7;
    this.ingredient8 = obj.ingredient8;
    this.ingredient9 = obj.ingredient9;
    this.ingredient10 = obj.ingredient10;
    this.ingredient11 = obj.ingredient11;
    this.ingredient12 = obj.ingredient12;
    this.step1 = obj.step1;
    this.step2 = obj.step2;
    this.step3 = obj.step3;
    this.step4 = obj.step4;
    this.step5 = obj.step5;
    this.step6 = obj.step6;
    this.tip = obj.tip;
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