let accordion = class Accordion {
    constructor() {
        this.slides = 0;
        this.image = [];
        this.spawned = false;
        this.tickrate = 1000;
        this.isActive = true;
    }

    addSlide(image) {
        if (this.slides <= 0) { this.slides = 0 }
        this.slides += 1;
        this.image.push(image);
        this.init()
    }

    removeSlide(num) {
        this.slides -= num;
        this.image.pop(num);
        this.init();
    }

    init() {
        document.getElementById('accordion').innerHTML = `<ul id="inneracc"></ul>`;
        for (let i = 0; i < this.slides; i++) {
            document.getElementById('inneracc').innerHTML += `<li onclick="acc.currentSlide(${i})" id="item" class="${i} acc-elm"><img src=${this.image[i]} class="image"></li>`;
            document.getElementById('inneracc').firstElementChild.className = '0 acc-elm current';
        }
    }

    currentSlide(id) {
        for (let i = 0; i < this.slides; i++) {
            console.log(document.getElementsByClassName(`${i}`)[0].classList.remove('current'))
        }
        document.getElementsByClassName(`${id}`)[0].classList.add('current');
    }

    autoplay(bool) {
        if (bool == true) {
            this.isActive = true;
        } else { this.isActive = false; this.currentSlide(0) }
        let counter = 0;
        setInterval(() => {
            if (this.isActive == true) {
                counter++;
                if (counter >= this.slides || counter <= this.slides) {
                    if (counter !== this.slides) {
                        this.currentSlide(counter);
                    } else { counter = 0; this.currentSlide(0) }
                }
            }
        }, this.tickrate);
    }

    test() {
        for (let i = 0; i < 26; i++) {
            this.addSlide('images/tim.png');
        }
    }
}
