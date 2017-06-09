angular
  .module('Manimal')
  .controller('BrandsIndexCtrl', BrandsIndexCtrl);

BrandsIndexCtrl.$inject = ['Brand'];
function BrandsIndexCtrl(Brand) {
  const vm = this;

  brandsIndex();

  function brandsIndex() {
    Brand.query().$promise
    .then(res => {
      vm.brands = res;
    });
  }
}
