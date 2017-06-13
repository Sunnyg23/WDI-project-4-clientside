angular
  .module('Manimal')
  .controller('ProductsIndexCtrl', ProductsIndexCtrl);

ProductsIndexCtrl.$inject = ['Product'];
function ProductsIndexCtrl(Product) {

  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  productsIndex();

  function productsIndex() {
    Product.query().$promise
    .then(res => {
      vm.products = res;
    });
  }
}
