let AddController = function($scope, RecipeService) {

  $scope.addRecipe = (obj) => {
    RecipeService.addRecipe(obj).then( (res) => {
      $scope.recipe = {};
    });
  };

};
AddController.$inject = ['$scope', 'RecipeService'];
export default AddController;