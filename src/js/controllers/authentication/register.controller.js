angular
.module('Manimal')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;
  vm.gorillaImg = 'images/2999.jpg';
  vm.register = () => {
    User
    .register(vm.user).$promise
    .then(()  =>  {
      CurrentUserService.getUser();
      $state.go('home');
    })
    .catch(err => {
      console.log(err);
    });
  };
}
