angular
.module('Manimal')
.factory('Like', likeFactory);

likeFactory.$inject = ['API', '$resource'];
function likeFactory(API, $resource){
  return $resource(`${API}/likes/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
