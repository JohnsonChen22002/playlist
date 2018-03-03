// quick fix for Cloud9 warning:
/* global $ */
var mySong = {
	"title": "24K Magic",
	"artist": "Bruno Mars",
	"mp3-url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	"image-url": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}

var myPlayList = [{
		"title": "24K Magic",
		"artist": "Bruno Mars",
		"mp3-url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"mp3-url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"mp3-url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];



// DOCUMENT READY FUNCTION
$(document).ready(function() {
	$('button').click(function() {
		clearList(); 
		addSong();
		displayList();
	});


});

function displayList() {
	for (var i = 0; i < myPlayList.length; i++) {
		$('#songs').append(' Title: ' + myPlayList[i].title + '<p>');
		$('#songs').append(' Artist: ' + myPlayList[i].artist + '<p>');
		$('#songs').append(' Mp3: ' + myPlayList[i]["mp3-url"] + '<p>');
		$('#songs').append(' Image: ' + myPlayList[i]["image-url"] + '<p>');
	}


}

function clearList() {
	$('#songs').empty();
}

function addSong() {
	myPlayList.push({ title: $("#title").val(), artist: $("#artist").val(), ["mp3-url"]: $("#mp3").val(), ["image-url"]: $("#image").val() });


}
