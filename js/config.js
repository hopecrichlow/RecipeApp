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
        sidebar: {
          template: '<p>Sidebar</p>'
        },
        content: {
          controller: 'CourseController',
          templateUrl: 'templates/course.tpl.html'
        },
        footer: {
          template: '<small>Footer</small>'
        }
      }
    })
    .state('root.recipe', {
      url: '/recipe/:recipeId',
      views: {
        sidebar: {   
          controller: 'RecipeController',
          templateUrl: 'templates/ingredients.tpl.html'
        },
        content: {       
          controller: 'RecipeController',
          templateUrl: 'templates/recipe.tpl.html'
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