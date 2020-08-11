app.controller('ArticleController', ['$scope', 'articles',function($scope,  articles){
      articles.get().then( async function(data){
        $scope.articles = data;
    })
    .catch(function(response){
        console.log(response.status)
    })
}])