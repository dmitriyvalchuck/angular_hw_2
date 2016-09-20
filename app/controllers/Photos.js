app.controller('Photos', function($scope, $location, Data) {
	$scope.photos = Data.getPhotos();
	$scope.filterPattern = "";

	$scope.handleRowClick = function(clickedRow) {
		$location.path(Const.URL_PHOTO_PAGE + clickedRow);
	};

	$scope.handleInputChange = function() {
		$scope.photos = Data.getPhotosByNamePattern(this.filterPattern);
	};
});