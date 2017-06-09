angular
.module('Manimal')
.factory('Brand', brandFactory);

brandFactory.$inject = ['API', '$resource'];
function brandFactory(API, $resource){
  return $resource(`${API}/brands/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
