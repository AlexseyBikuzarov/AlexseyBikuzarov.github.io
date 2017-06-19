//open and close modal
var bgModal = document.querySelector(".bg-modal");
var modalWindow = document.querySelector(".modal-window");
function modalOpen() {
	bgModal.classList.add("active");
	modalWindow.classList.add("active");
};
function modalClose(){
	bgModal.classList.remove("active");
	modalWindow.classList.remove("active");
};
var bgBasket = document.querySelector(".bg-basket");
var modalBasket = document.querySelector(".basket-modal");
function modalOpenBasket() {
	bgBasket.classList.add("active");
	modalBasket.classList.add("active");
};
function modalCloseBasket(){
	bgBasket.classList.remove("active");
	modalBasket.classList.remove("active");
};
////////
//slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
	showSlides(slideIndex += n);
};
function currentSlide(n){
	showSlides(slideIndex = n);
};
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slider__item");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length){
		slideIndex = 1;
	};
	if (n < 1 ){
		slideIndex = slides.length;
	};
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		// slides[i].style.opacity = "0.3";
	};
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active__slide","")
	};
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active__slide"
};
setInterval(function() {
	return plusSlides(1);
}, 5000);


// catalog

var container = document.querySelector(".pack-prod__cards");
var activeFilter = "filter-all";
var carSeats = [];
var filteredCarSeats = [];
var currentPage = 0;
var PAGE_SIZE = 9;
var gallery = new Gallery();

var filters = document.querySelectorAll(".sorting-price");
for ( var i = 0; i < filters.length; i++){
	filters[i].onclick = function(evt){
		currentPage = 0;
		var clickedElementID = evt.target.id;
		setActiveFilter(clickedElementID);
	};
};


var scrollTimeout;
window.addEventListener("scroll", function(evt){
	clearTimeout(scrollTimeout);
	scrollTimeout = setTimeout(function(){
		var sectionCoordinates = document.querySelector(".about-store__h").getBoundingClientRect();
		var viewportSize = window.innerHeight;
		if (sectionCoordinates.bottom - window.innerHeight <= sectionCoordinates.height){
				renderCarSeats(filteredCarSeats, ++currentPage);
		};
	},100);
});

getCarSeats();

var buttonNul = document.querySelector(".clickNul");
var buttonOdin = document.querySelector(".clickOdin");
var buttonDva = document.querySelector(".clickDva");
var buttonTri = document.querySelector(".clickTri");

buttonNul.addEventListener("click", function(evt){
	var cardsNul = document.querySelectorAll(".nol");
	var cardsOdin = document.querySelectorAll(".odin");
	var cardsDva = document.querySelectorAll(".dva");
	var cardsTri = document.querySelectorAll(".tri");
	for( i=0; i < cardsOdin.length; i++){
		cardsOdin[i].classList.add("hidden");
	};
	for( i=0; i < cardsDva.length; i++){
		cardsDva[i].classList.add("hidden");
	};
	for( i=0; i < cardsTri.length; i++){
		cardsTri[i].classList.add("hidden");
	};
	for( i=0; i < cardsNul.length; i++){
		cardsNul[i].classList.remove("hidden");
	};
});

buttonOdin.addEventListener("click", function(evt){
	var cardsNul = document.querySelectorAll(".nol");
	var cardsOdin = document.querySelectorAll(".odin");
	var cardsDva = document.querySelectorAll(".dva");
	var cardsTri = document.querySelectorAll(".tri");
	for( i=0; i < cardsOdin.length; i++){
		cardsOdin[i].classList.remove("hidden");
	};
	for( i=0; i < cardsDva.length; i++){
		cardsDva[i].classList.add("hidden");
	};
	for( i=0; i < cardsTri.length; i++){
		cardsTri[i].classList.add("hidden");
	};
	for( i=0; i < cardsNul.length; i++){
		cardsNul[i].classList.add("hidden");
	};
});

buttonDva.addEventListener("click", function(evt){
	var cardsNul = document.querySelectorAll(".nol");
	var cardsOdin = document.querySelectorAll(".odin");
	var cardsDva = document.querySelectorAll(".dva");
	var cardsTri = document.querySelectorAll(".tri");
	for( i=0; i < cardsOdin.length; i++){
		cardsOdin[i].classList.add("hidden");
	};
	for( i=0; i < cardsDva.length; i++){
		cardsDva[i].classList.remove("hidden");
	};
	for( i=0; i < cardsTri.length; i++){
		cardsTri[i].classList.add("hidden");
	};
	for( i=0; i < cardsNul.length; i++){
		cardsNul[i].classList.add("hidden");
	};
});

buttonTri.addEventListener("click", function(evt){
	var cardsNul = document.querySelectorAll(".nol");
	var cardsOdin = document.querySelectorAll(".odin");
	var cardsDva = document.querySelectorAll(".dva");
	var cardsTri = document.querySelectorAll(".tri");
	for( i=0; i < cardsOdin.length; i++){
		cardsOdin[i].classList.add("hidden");
	};
	for( i=0; i < cardsDva.length; i++){
		cardsDva[i].classList.add("hidden");
	};
	for( i=0; i < cardsTri.length; i++){
		cardsTri[i].classList.remove("hidden");
	};
	for( i=0; i < cardsNul.length; i++){
		cardsNul[i].classList.add("hidden");
	};
});

function renderCarSeats(carSeatsToRender, pageNumber, replace){
	if(replace){
		container.innerHTML = '';
	};
	var fragment = document.createDocumentFragment();
	var from = pageNumber * PAGE_SIZE;
	var to = from + PAGE_SIZE;
	var pageCarSeats = carSeatsToRender.slice(from, to);
	
	pageCarSeats.forEach(function(seats){
		var carSeatElement = new carSeat(seats);
		carSeatElement.render();
		fragment.appendChild(carSeatElement.element);
		carSeatElement.onClick = function(){
			gallery.data = carSeatElement._data;
			gallery.show();
		};
	});
	container.appendChild(fragment);
};

function setActiveFilter(id){
	if(activeFilter === id){
		return;
	};
	var selectedElement = document.querySelector("#" + activeFilter);
	if (selectedElement){
		selectedElement.classList.remove("carSeats-filter-selected");
	};
	document.querySelector("#" + id).classList.add("carSeats-filter-selected");
	filteredCarSeats = carSeats.slice(0);
	switch (id) {
		case "sorting-price-max" : 
			filteredCarSeats = filteredCarSeats.sort(function(a, b){
				return b.price - a.price;
			});
		break;
		case "sorting-price-min" : 
			filteredCarSeats = filteredCarSeats.sort(function(a, b){
				return a.price - b.price;
			});
		break;
	};
	renderCarSeats(filteredCarSeats, 0, true);
	activeFilter = id;
};
function getCarSeats(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "data/carSeats.json");
	xhr.onload = function(evt){
		var rawData = evt.target.response;
		var loadedCarSeats = JSON.parse(rawData);
		carSeats = loadedCarSeats;
		filteredCarSeats = loadedCarSeats;
		renderCarSeats(filteredCarSeats, 0);
	};
	xhr.send();
};

