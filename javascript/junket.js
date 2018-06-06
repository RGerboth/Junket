// junket.js
console.log("running junket.js ...")

var config = {
    apiKey: "AIzaSyCbBsdWwMPq3rd49Cmp6BA9A7mLaagRyIU",
    authDomain: "juncket-46335.firebaseapp.com",
    databaseURL: "https://juncket-46335.firebaseio.com",
    projectId: "juncket-46335",
    storageBucket: "juncket-46335.appspot.com",
    messagingSenderId: "508771339039"
};

firebase.initializeApp(config);

var database = firebase.database()
var countryCode = "";
var mapCountry = "Geneva"; // <== This is where the ISO is headquartered
var alertLevel = "";
var isoCode = "FR";
var wikiTitle = "France";

//modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 5});
	var geocoder = new google.maps.Geocoder;
	geocoder.geocode({'address': mapCountry}, function(results, status) {
		if (status === 'OK') {
			map.setCenter(results[0].geometry.location);
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
	        });
	    } else {
			window.alert('Geocode was not successful for the following reason: ' + status);
	}
	});
}

database.ref().on('value', function(snap) {
	console.log("Database updated...refresh page")
	$(".itinerary").empty();
    snap.forEach(function(snapshot) {
  		var country = snapshot.val();
  		countryCode = "";
		countryCode = getCountryCode(country);
	  	//create button with text = country
	    var countryButton = $("<button>");
	    countryButton.addClass("btn btn-primary countryButton");
	    countryButton.attr("countryName", country);
	    countryButton.attr("countryCode", countryCode);
	    countryButton.text(country);
	    //create delete button with db key for line item
	    var deleteButton = $("<button>");
	    deleteButton.addClass("btn btn-primary deleteButton");
	    var databaseKey = snapshot.key;
	    deleteButton.attr("data-key", databaseKey);
	    deleteButton.text("X");
	  	//fetch alert image
		var flagImage = "<img src='http://www.countryflags.io/" + countryCode +"/flat/64.png'></img>"
		
		var queryURL = "https://www.reisewarnung.net/api?country=" + countryCode;

		$.ajax({
	  		url: queryURL,
	  		method: "GET"
		}).then(function(response) {
	  		alertLevel = response.data.situation.rating;
	  		var travelAdvice = response.data.lang.en.advice;
	  		var statusImage = alerts(alertLevel);
			$(".itinerary").append("<tr><td>" + flagImage + "</td><td>" + countryButton.prop('outerHTML') + "</td><td><img class='alertIcon' src='css/" + statusImage + "'></img></td><td>" + deleteButton.prop('outerHTML') + "</td></tr>");
		});
	});	
});

$("#add-button").on("click", function(event) {
	event.preventDefault();
    var newCountry = $("#button-input").val().trim();
	countryCode = "";
	countryCode = getCountryCode(newCountry);

	if (countryCode !== "") {
		mapCountry = newCountry;
		initMap();
		database.ref().push(newCountry);
	} else {
		modal.style.display = "block";
	}

    $("#button-input").val("")
});

$(document).on("click", ".countryButton", function(event) {
  	event.preventDefault();
    wikiTitle = $(this).attr("countryName");
   	mapCountry = wikiTitle;
	initMap();

    isoCode = getCountryCode(wikiTitle)
    $("#advice, #112, #fire, #police, #ambulance, #dispatch, #embassy, #wiki").empty()
    returnAdvice(isoCode);
    emergency(isoCode);
    consularData(isoCode);
    countrySummary(wikiTitle);
});

$(document).on("click", ".deleteButton", function(event) {
	var deleteKey = $(this).attr("data-key");
	database.ref().child(deleteKey).remove();	

});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

