angular
.module('Manimal')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state', '$rootScope'];
function LoginCtrl(User, CurrentUserService, $state, $rootScope)  {
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';

  vm.login = () => {
    User
    .login(vm.user).$promise
    .then(()  =>  {
      CurrentUserService.getUser();
      $state.go('home');
    })
    .catch(err => {
      console.log(err);
    });
  };
}
