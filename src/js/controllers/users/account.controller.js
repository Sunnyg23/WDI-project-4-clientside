angular
  .module('Manimal')
  .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = [
  'User',
  'Catergory',
  'Product',
  'Brand',
  'TokenService',
  '$state',
  'filterFilter'
];
function AccountCtrl(
  User,
  Catergory,
  Product,
  Brand,
  TokenService,
  $state,
  filterFilter
) {
  const vm = this;
  vm.userId = TokenService.decodeToken().id;
  vm.update = usersUpdate;
  vm.addProduct = addProduct;
  vm.addBrand = addBrand;
  vm.addCatergory = addCatergory;
  vm.instructionCount = 0;

  function getUser() {
    vm.user = User.get({ id: vm.userId });
  }

  getUser();

  vm.updatedUser = vm.user;

  vm.Catergory = Catergory.query(catergories => {
    // console.log(cuisines[0].name+' account controller');
  });

  vm.allIngredients = Product.query(products => {
    // console.log(ingredients+' account controller');
  });

  vm.newRecipeCategory = '';
  vm.newRecipe = {
    name: '',
    chef: vm.userId,
    instructions: [],
    ingredients: [],
    images: {
      small: '',
      large: ''
    }
  };

  vm.newIngredientMeasurement = '';

  vm.newIngredient = {
    name: '',
    images: {
      small: ''
    }
  };

  vm.newInstruction = {
    index: 0,
    content: ''
  };

  function usersUpdate() {
    User
      .update({ id: vm.userId }, vm.updatedUser)
      .$promise
      .then(user => {
        console.log(user);
        vm.user = user;
        // $state.go('account');
        getUser();
      });
  }

  function addIngredient() {
    const filtered = filterFilter(vm.allIngredients, {name: vm.newIngredient.name});
    if(filtered.length < 1) {
      Ingredient
        .save(vm.newIngredient)
        .$promise
        .then(ingredient => {
          vm.newRecipe.ingredients.push({
            measurement: vm.newIngredientMeasurement,
            ingredient: ingredient._id
          });
          vm.newIngredientMeasurement = '';
        });
    } else {
      vm.newRecipe.ingredients.push({
        measurement: vm.newIngredientMeasurement,
        ingredient: filtered[0]._id
      });
      vm.newIngredientMeasurement = '';
    }
    vm.newIngredient = {
      name: '',
      images: {
        small: ''
      }
    };
  }

  function addInstruction() {
    let index = 1;
    vm.newRecipe.instructions.push(vm.newInstruction);
    vm.newInstruction = {
      index: vm.newInstruction.index + index,
      content: ''
    };
  }

  function createRecipe() {
    const filtered = filterFilter(vm.cuisines, {name: vm.newRecipeCategory});
    if(vm.newRecipeCategory !== 'Select one' && vm.newRecipeCategory !== '') {
      Recipe.save(vm.newRecipe)
        .$promise
        .then(recipe => {
          filtered[0].recipes.push(recipe._id);
          vm.user.recipes.push(recipe._id);
          usersUpdate();
          return Cuisine
            .update(filtered._id, filtered[0]);
        })
        .then(cuisine => {
          getUser();
          $state.go('account');
        });
    }
  }

  // getUser();
}

// const filtered = filterFilter(vm.cuisines, {name: vm.newRecipeCategory});
// filtered[0].recipes.push('id here');
