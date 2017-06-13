// ability to like a product once

angular
  .module('Manimal')
  .controller('ProductsShowCtrl', ProductsShowCtrl);

ProductsShowCtrl.$inject = ['$stateParams', 'Product', 'Like', 'CurrentUserService'];
function ProductsShowCtrl($stateParams, Product, Like, CurrentUserService) {
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  vm.likeProduct = likeProduct;

  Product
    .get($stateParams)
    .$promise
    .then(product => {
      vm.product = product;

      if (vm.product.likes.find(like => like.user.id === CurrentUserService.currentUser.id)) {
        vm.disabled = true;
      }
    });

  function likeProduct() {
    const like = {
      user_id: parseInt(CurrentUserService.currentUser.id),
      product_id: vm.product.id
    };

    Like
      .save(like)
      .$promise
      .then(() => {
        vm.disabled = true;
        console.log('Product liked');
      });
  }
}
