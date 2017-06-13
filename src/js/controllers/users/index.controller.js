angular
  .module('Manimal')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  vm.users = User.query();
}
