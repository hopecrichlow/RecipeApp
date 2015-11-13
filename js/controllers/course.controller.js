let CourseController = function($scope, RecipeService) {

  RecipeService.getRecipes().then ( (res) => {
    $scope.recipes = res.data.results;
  });

};
CourseController.$inject = ['$scope', 'RecipeService'];
export default CourseController;