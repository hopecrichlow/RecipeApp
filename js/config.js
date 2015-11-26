let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.course', {
      url: '/',
      views: {
        content: {
          controller: 'CourseController',
          templateUrl: 'templates/course.tpl.html'
        }
      }
    })
    .state('root.recipe', {
      url: '/recipe/:recipeId',
      views: {
        title: {
          controller: 'RecipeController',
          templateUrl: 'templates/general.info.tpl.html'
        },
        sidebar: {   
          controller: 'RecipeController',
          templateUrl: 'templates/ingredients.tpl.html'
        },
        content: {       
          controller: 'RecipeController',
          templateUrl: 'templates/recipe.tpl.html'
        },
        footer: {
          controller: 'RecipeController',
          template: 
            '<hr><footer><a href="#/edit/{{ singleRecipe.objectId }}">Edit Me</a> | <a href="#" ng-click="deleteMe(singleRecipe)">Delete Me</a></footer>'
        }
      }
    })
    .state('root.add', {
      url: '/add',
      views: {
        content: {       
          controller: 'AddController',
          templateUrl: 'templates/add.tpl.html'
        }
      }
    })
    .state('root.edit', {
      url: '/edit/:recipeId',
      views: {
        content: {
          controller: 'EditController',
          templateUrl: 'templates/edit.tpl.html'
        }
      }
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;