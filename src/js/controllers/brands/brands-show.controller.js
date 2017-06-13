angular
  .module('Manimal')
  .controller('BrandsShowCtrl', BrandsShowCtrl);

BrandsShowCtrl.$inject =
  ['API', '$stateParams', 'Brand'];

function BrandsShowCtrl(API, $stateParams, Brand) {
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  Brand.get($stateParams).$promise
  .then(res => {
    vm.brand = res;
  });
}
