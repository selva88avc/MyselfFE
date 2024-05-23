var movies = [];
var favourites = [];
function getMovies() {
	return fetch('http://localhost:3000/movies')
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
			else {
				return Promise.reject(new error("Something went wrong while fetching"))
			}

		})
		.then((res2) => {
			movies = res2;
			displayMovies();
			return Promise.resolve(res2);
		})
		.catch((err) => {
			return "Error occured " + err;
		})
}


function displayMovies() {
	result = "";
	if (typeof movies != 'undefined') {
		movies.forEach(rec => {
			result += `<li><div class="row"><div class="col-3 col-md-3">${rec.title}</div><div class="col-3 col-md-3"><a href="${rec.posterPath}">Link</a></div>`;
			result += `<div class="col-6 col-md-6 text-right "><button onclick=addFavourite(${rec.id})>Add Favourite</button></div></div></li>`;
		}
		)
	}
	document.getElementById("moviesList").innerHTML = result;
}



function getFavourites() {
	return fetch('http://localhost:3000/favourites')
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
			else {
				return Promise.reject(new error("Something went wrong while fetching"))
			}
		})
		.then((res2) => {
			favourites = res2;
			displayFavourites();
			return Promise.resolve(res2);
		})
		.catch((err) => {
			return err;
		})

}

function displayFavourites() {
	result = "";
	if (typeof favourites != 'undefined') {
		favourites.forEach(rec => {
			result += `<li><div class="row"><div class="col-6 col-md-6">${rec.title}</div>
			<a href="${rec.posterPath}">Link</a>
			
			</div></li>`;
		}
		)
	}
	document.getElementById("favouritesList").innerHTML = result;
}

function addFavourite(id) {
	if (checkExists(id)) {
		alert("exists");
		return Promise.reject(new Error("Movie is already added to favourites"));
	}
	let data = movies.find((bk) => bk.id == id)
	return fetch('http://localhost:3000/favourites',
		{
			"method": "POST",
			"headers": { "content-type": "application/json" },
			"body": JSON.stringify(data)
		}
	).then(
		(res) => {
			if (res.status === 200||res.status === 201) {
				favourites.push(data);
				displayFavourites();
				return Promise.resolve(favourites);
			} else {
				return Promise.resolve(favourites);
			}
		}
	)
		.catch(
			(err) => {
				return Promise.reject(err)

			}
		)
}

var checkExists = function (id) {
	var i = favourites.length;
	while (i--) {
		if ((favourites[i]["id"] == id)) {
			return true;
		}
	}
	return false;
}





function deleteMovie(id) {

	fetch('http://localhost:3000/movies/' + id,
		{
			"method": "DELETE"
		}
	)
		.then((res) => {
			if (res.status == 200) {
				removeByAttr(movies, 'id', id);
				displayMovies();
				console.log("Record deleted");

			}
		}
		)
		.catch((err) => {
			console.log("Error found " + err);
		})
}



var removeByAttr = function (arr, attr, value) {
	var i = arr.length;
	while (i--) {
		if ((arr[i][attr] == value)) {
			arr.splice(i, 1);
		}
	}
	return arr;
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


