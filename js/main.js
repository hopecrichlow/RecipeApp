import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import HomeController from './controllers/home.controller';
import RecipeController from './controllers/recipe.controller';
import EditController from './controllers/edit.controller';

import RecipeService from './services/recipe.service';

//Creating a Module
angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'UlnlzzVbvXlbnPvPj7OhuH3Xf02jpZvJhNgOnzNa',
        'X-Parse-REST-API-Key': 'JESNisz4oAzhiCs53PqbXOXNSTXlnjPBHobYadI4'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('HomeController', HomeController)
  .controller('RecipeController', RecipeController)
  .controller('EditController', EditController)
  .service('RecipeService', RecipeService)
;


console.log('Hello, World');
