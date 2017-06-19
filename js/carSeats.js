(function(){
	function carSeat(data){
		this._data = data;
	}


	carSeat.prototype.render = function(){
		var template = document.querySelector("#pack");
		this.element = template.content.children[0].cloneNode(true);
		this.element.querySelector(".pack-prod__h").textContent = this._data.name;
		this.element.querySelector(".pack-prod__main-photo").src = this._data.photo[0];
		this.element.querySelector(".pack-prod__description").innerHTML = this._data.characteristics[0] + "<br>" + this._data.characteristics[1];
		this.element.querySelector(".pack-prod__price").textContent = this._data.price + "p.";
		this.element.querySelector(".pack-prod__more").addEventListener("click", function(evt){
			if (typeof this.onClick === "function"){
				this.onClick();
			};
		}.bind(this));
		if(this._data.type === "0"){
			this.element.classList.add("nol");

		};
		if(this._data.type === "1"){
			this.element.classList.add("odin");
		};

		if(this._data.type === "2"){
			this.element.classList.add("dva");
		};
		if(this._data.type === "3"){
			this.element.classList.add("tri");
		};
	};
	carSeat.prototype.onClick = null;
	window.carSeat = carSeat;

})();