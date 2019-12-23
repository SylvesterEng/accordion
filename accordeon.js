let accordion = class Accordion {
    constructor() {
        this.slides = 0;
        this.image = [];
        this.spawned = false;
        this.tickrate = 5000;
        this.isActive = true;
        this.caption = [];
    }

    addSlide(image, caption) {
        if (this.slides <= 0) { this.slides = 0 }
        this.slides += 1;
        this.image.push(image);
        this.caption.push(caption);
        console.log(caption)
        this.init()
    }

    currentSlide(id) {
        for (let i = 0; i < this.slides; i++) {
            console.log(document.getElementsByClassName(`${i}`)[0].classList.remove('current'))
        }
        document.getElementsByClassName(`${id}`)[0].classList.add('current');
    }

    init() {
        document.getElementById('accordion').innerHTML = `<ul id="inneracc"></ul>`;
        for (let i = 0; i < this.slides; i++) {
            document.getElementById('inneracc').innerHTML += `<li onclick="acc.currentSlide(${i})" onmouseover="acc.currentSlide(${i});" id="item" class="${i} acc-elm"><img src=${this.image[i]} class="image ${i}"><pre class="stateless"><span>${this.caption[i]}</span></pre></li>`;
            document.getElementById('inneracc').firstElementChild.className = '0 acc-elm current';
        }
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
        for (let i = 0; i < 5; i++) {
            this.addSlide('images/te.jpeg');
        }
    }
}
