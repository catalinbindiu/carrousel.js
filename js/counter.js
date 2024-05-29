export default class Counter {
	imgArr = [
		"images/img1.png",
		"images/img2.jpg",
		"images/img3.jpg",
		"images/img4.jpg",
	];

	constructor(cssClass) {
		this.image = document.querySelector(cssClass);
		this.button = document.querySelectorAll(".button");
		this.index = 0;
		this.addEvent();
	}

	addEvent() {
		this.button[0].addEventListener("click", (e) => {
			if (this.index > 0) {
				this.index--;
				this.image.setAttribute("src", this.imgArr[this.index]);
				console.log(this.index);
			}
		});

		this.button[1].addEventListener("click", (e) => {
			if (this.index < this.imgArr.length - 1) {
				this.index++;
				this.image.setAttribute("src", this.imgArr[this.index]);
				console.log(this.index);
			}
		});
	}
}
