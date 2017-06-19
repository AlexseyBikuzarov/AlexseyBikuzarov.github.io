(function(){
	var Gallery = function(){
		this.element = document.querySelector(".pack-prod_m");
		this._closeButton = document.querySelector(".pack-prod_m_close");
		this._onCloseClick = this._onCloseClick.bind(this);
	};

	var picture;

	Gallery.prototype.show = function(){
		// window.open("gallery.html");
		bgModal.classList.add("active");
		var item = this.data.characteristics;
		var special = this.data.features;
		this.element.classList.remove("hidden");
		thumbnailsContainer = this.element.querySelector(".pack-prod__small-photo_m");
		document.querySelector(".pack-prod__h_m").textContent = this.data.name;
		document.querySelector(".pack-prod__price_m").textContent = this.data.price + "р.";
		document.querySelector(".pack-prod__description_m").innerHTML = "Характеристики" + item.map( function( item ) {
			return `<li>${item}</li>`;
		}).join("");
		document.querySelector(".pack-prod__special_m").innerHTML = "Особенные характеристики" + special.map( function( special ) {
			return `<li>${special}</li>`;
		}).join("");
		
		this.data.photo.forEach(function(pic, i){
			var picture = new Image();
			picture.src = pic;
			picture.classList.add("min-img");//////////////////////////////////////////////////////////////////
			picture.addEventListener("click", function(){
				srcMinImg = picture.src;
				this.element.querySelector(".pack-prod__main-photo_m").src = srcMinImg;
			}.bind(this));
			thumbnailsContainer.appendChild(picture);
			},this);
		this.element.querySelector(".pack-prod__main-photo_m").src = this.data.photo[0];
		this._closeButton.addEventListener("click", this._onCloseClick);
		var basketBox = document.querySelector(".basket-modal");
		var basketPhoto = document.querySelector(".basket-box__photo");
		var basketName = document.querySelector(".basket-box__name")
		basketPhoto.src = this.data.photo[0];
		basketName.textContent = this.data.name;
	};


	Gallery.prototype.hide = function(){
		this.element.classList.add("hidden");
		bgModal.classList.remove("active");
		while (thumbnailsContainer.firstChild){
			thumbnailsContainer.removeChild(thumbnailsContainer.firstChild);
		};
	};

	Gallery.prototype._onCloseClick = function() {
		this.hide();
	};
	window.Gallery = Gallery;
})();