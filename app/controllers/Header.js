app.controller('Header', function($scope, $location) {
	$scope.page = {};

	var pageUrl = $location.path(),
		pageName = Const.PAGE_NAME_HOME;

	if(pageUrl !== Const.URL_HOME_PAGE) {
		pageName = Const.PAGE_NAME_PHOTO;
	}

	$scope.page.name = pageName;
});