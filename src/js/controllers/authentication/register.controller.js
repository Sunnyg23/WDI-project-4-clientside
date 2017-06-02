angular
.module('Img')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state', '$rootScope'];
function RegisterCtrl(User, CurrentUserService, $state, $rootScope){
  const vm = this;

  vm.register = () => {
    User
    .register(vm.user).$promise
    .then(()  =>  {
      CurrentUserService.getUser();
      $rootScope.$broadcast('loggedIn');
      $state.go('usersIndex');
    })
    .catch(err => {
      console.log(err);
    });
  };
}
