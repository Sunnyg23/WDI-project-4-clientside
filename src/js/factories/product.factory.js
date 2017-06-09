angular
.module('Manimal')
.factory('Product', productFactory);

productFactory.$inject = ['API', '$resource'];
function productFactory(API, $resource){
  return $resource(`${API}/products/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
