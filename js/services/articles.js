app.factory('articles', ['$http', '$q', function($http, $q) {
  return {
      get: async function(){
          var deferred = $q.defer();
          $http.get('https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=25')
          .then(response =>{
              return response.data; 
          })
          .then(data => {
            let articleList = [];
            data.forEach(element => {
                $http.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
                .then(function(response){
                    articleList.push(response.data);
                })
            });
            return articleList;
          }).then(articleList => {
              deferred.resolve(articleList);
          })
          .catch(function(response){
              deferred.reject(response);
          });
          return deferred.promise;
      }
  }
  }]);