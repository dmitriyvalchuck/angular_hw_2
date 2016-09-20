app.factory("Data", function ($window, $rootScope) {
	var service = {};

	service._photos = [
		{
			"id": "1",
			"name": "Summer.jpeg",
			"likes": "3",
			"author": "Ivan Ivanov",
			"isVisible": true
		},
		{
			"id": "2",
			"name": "Autumn.png",
			"likes": "6",
			"author": "Vasya Pupkin",
			"isVisible": true
		},
		{
			"id": "3",
			"name": "Winter.png",
			"likes": "16",
			"author": "Petr Petrov",
			"isVisible": false
		},
		{
			"id": "4",
			"name": "Spring.JPG",
			"likes": "12",
			"author": "Anna Ivanova",
			"isVisible": true
		}
	];

	service._getPhotoIndexById = function (id) {
		var result = -1;

		for(var i = 0; i < this._photos.length; i++) {
			if(this._photos[i].id === id) {
				result = i;
			}
		}

		return result;
	};

	service.getPhotos = function() {
		return this._photos;
	};

	service.getPhotoById = function (id) {
		var result = -1;

		for(var i = 0; i < this._photos.length; i++) {
			if(this._photos[i].id === id) {
				result = this._photos[i];
			}
		}

		return result;
	};

	service.updatePhoto = function (photo) {
		var currentPhotoIndex = this._getPhotoIndexById(photo.id),
			currentPhoto = {};

		currentPhoto = this._photos[currentPhotoIndex];

		currentPhoto.name = photo.name;
		currentPhoto.isVisible = photo.isVisible;

		return currentPhoto;
	};

	service.getPhotosByNamePattern = function (pattern) {
		var filteredPhotos = [];

		for(var i = 0; i < this._photos.length; i++) {
			if(this._photos[i].name.indexOf(pattern) !== -1) {
				filteredPhotos.push(this._photos[i]);
			}
		}

		return filteredPhotos;
	};

	return service;
});
