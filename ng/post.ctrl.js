angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
	$scope.addPost = function (){
		if($scope.postBody){
			PostsSvc.create({
				username: 'dickeyxxx',
				body: $scope.postBody	
			}).success((post)=>{
				$scope.posts.unshift(post);
				$scope.postBody = null;
			})
		}
	};
	PostsSvc.fetch().success((posts) => {
		$scope.posts = posts;
	});
});