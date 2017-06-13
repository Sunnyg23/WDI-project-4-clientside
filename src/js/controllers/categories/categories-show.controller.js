angular
  .module('Manimal')
  .controller('CategoriesShowCtrl', CategoriesShowCtrl);

CategoriesShowCtrl.$inject =
  ['$stateParams', 'Category'];

function CategoriesShowCtrl($stateParams, Category) {
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  Category.get($stateParams).$promise
  .then(res => {
    vm.category = res;
  });
}
