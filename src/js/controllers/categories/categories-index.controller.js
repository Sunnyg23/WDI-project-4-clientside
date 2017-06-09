angular
  .module('Manimal')
  .controller('CategoriesIndexCtrl', CategoriesIndexCtrl);

CategoriesIndexCtrl.$inject = ['Category'];
function CategoriesIndexCtrl(Category) {
  const vm = this;

  categoriesIndex();

  function categoriesIndex() {
    Category.query().$promise
    .then(res => {
      vm.categories = res;
      console.log(vm.categories);
    });

  }
}
