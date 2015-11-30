let HomeController = function($scope, RecipeService) {

  RecipeService.getRecipes().then ( (res) => {
    $scope.recipes = res.data.results;
  });

};
HomeController.$inject = ['$scope', 'RecipeService'];
export default HomeController;