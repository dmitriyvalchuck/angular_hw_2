app.controller('Photos', function($scope, $location, Data) {
console.log(Data.isReady());
	if(!Data.isReady()){
		var promise = Data.uploadPhoto();
		promise.then(
				function (payload) {
					$scope.photos = payload.data.slice(0,50);
				}
		);
	}
	else{
		$scope.photos = Data.getPhotos();
	}
	$scope.photoCounter = 0;
	$scope.printCount = function () {
		console.log($scope.photoCounter);
		return $scope.photoCounter = $scope.photoCounter + 1;
	};

	Data.setPhotos($scope.photos);

	$scope.filterPattern = "";

	$scope.handleRowClick = function(clickedRow) {
		$location.path(Const.URL_PHOTO_PAGE + clickedRow);
	};

	$scope.handleInputChange = function() {
		$scope.photos = Data.getPhotosByNamePattern(this.filterPattern);
	};

});

app.filter('isvisible', function () {
	return function (isvisible) {
		return isvisible ? "inline-block" : "none";
	};
});