let EditController = function($scope, $stateParams, RecipeService) {
  
  RecipeService.getRecipe($stateParams.recipeId).then( (res) => {
    $scope.singleRecipe = res.data;
  });

  $scope.updateRecipe = function (obj) {
    RecipeService.update(obj).then( (res) => {
      console.log(res);
    });
  };
  

};
EditController.$inject = ['$scope', '$stateParams', 'RecipeService'];
export default EditController;