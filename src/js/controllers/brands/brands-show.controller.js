angular
  .module('Manimal')
  .controller('BrandsShowCtrl', BrandsShowCtrl);

BrandsShowCtrl.$inject =
  ['API', '$stateParams', 'Brand'];

function BrandsShowCtrl(API, $stateParams, Brand) {
  const vm = this;
  Brand.get($stateParams).$promise
  .then(res => {
    vm.brand = res;
  });
}
