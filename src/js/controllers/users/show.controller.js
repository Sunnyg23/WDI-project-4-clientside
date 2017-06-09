angular
  .module('Manimal')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'User', 'Like'];
function UsersShowCtrl($stateParams, User, Like) {
  const vm = this;
  vm.user = User.get($stateParams);
  vm.removeLike = removeLike;

  function removeLike(like) {
    Like
      .delete({id: like.id })
      .$promise
      .then(() => {
        const index = vm.user.likes.indexOf(like);
        vm.user.likes.splice(index, 1);
      });
  }
}
