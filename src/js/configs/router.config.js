angular
.module('Manimal')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/views/users/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/users/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/users/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as users'
  })
  .state('categoriesIndex', {
    url: '/categories',
    templateUrl: '/js/views/categories/categories_index.html',
    controller: 'CategoriesIndexCtrl as categories'
  })
  .state('categoriesShow', {
    url: '/categories/:id',
    templateUrl: '/js/views/categories/categories_show.html',
    controller: 'CategoriesShowCtrl as categories'
  })
  .state('productsIndex', {
    url: '/products',
    templateUrl: '/js/views/products/products_index.html',
    controller: 'ProductsIndexCtrl as products'
  })
  .state('productsShow', {
    url: '/products/:id',
    templateUrl: '/js/views/products/products_show.html',
    controller: 'ProductsShowCtrl as products'
  })
  .state('brandsIndex', {
    url: '/brands',
    templateUrl: '/js/views/brands/brands_index.html',
    controller: 'BrandsIndexCtrl as brands'
  })
  .state('brandsShow', {
    url: '/brands/:id',
    templateUrl: '/js/views/brands/brands_show.html',
    controller: 'BrandsShowCtrl as brands'
  });

  $urlRouterProvider.otherwise('/');
}
