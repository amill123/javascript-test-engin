app.factory('articles', ['$http', '$q', function($http, $q) {
  return {
      get: async function(){
          var deferred = $q.defer();
          $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
          .then(function(response){
              return response.data; 
          })
          .then(data => {
            let articleList = [];
            for(let i=0; i<25; i++){
                    $http.get(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`).then(function(response){
                    articleList.push(response.data);
                })
            }
            console.log(articleList);
            return articleList;
          }).then(articleList=>{
              deferred.resolve(articleList);
          })
          .catch(function(response){
              deferred.reject(response);
          });
          return deferred.promise;
      }
  }
  }]);