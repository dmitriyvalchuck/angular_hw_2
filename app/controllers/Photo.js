app.controller('Photo', function($scope, $location, Data, $routeParams) {
	var currentPhotoId = $routeParams.photoId,
		goHomeAction;

	goHomeAction = function () {
		$location.path(Const.URL_HOME_PAGE);
	};

	$scope.photo = Data.getPhotoById(currentPhotoId);

	$scope.handleSaveButtonClick = function () {
		Data.updatePhoto($scope.photo);
		goHomeAction();
	};

	$scope.handleCancelButtonClick = function () {
		goHomeAction();
	};
});