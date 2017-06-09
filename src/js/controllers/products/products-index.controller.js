angular
  .module('Manimal')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl);

ProductsIndexCtrl.$inject = ['Product'];
function ProductsIndexCtrl(Product) {
  const vm = this;

  productsIndex();

  function productsIndex() {
    Product.query().$promise
    .then(res => {
      vm.products = res;
    });
  }
}
