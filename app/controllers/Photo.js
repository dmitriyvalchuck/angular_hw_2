app.controller('Photo', function($scope, $location, Data, $routeParams) {
	var currentPhotoId = $routeParams.photoId,
		goHomeAction;

	goHomeAction = function () {
		$location.path(Const.URL_HOME_PAGE);
	};

	if (!Data.isReady()) {
		var promise = Data.uploadPhoto();
		promise.then(
				function (payload) {
					Data.setPhotos(payload.data.slice(0, 50));
					$scope.photo = Data.getPhotoById(currentPhotoId);
				}
		);
	}
	else {
		$scope.photo = Data.getPhotoById(currentPhotoId);
	}



	$scope.handleSaveButtonClick = function () {
		Data.updatePhoto($scope.photo);
		goHomeAction();
	};

	$scope.handleCancelButtonClick = function () {
		goHomeAction();
	};
});