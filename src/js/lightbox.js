import '../css/lightbox.css'

class Lightbox {
    constructor() {
        let collection = document.getElementsByClassName('lightbox');
        for (var i = 0; i < collection.length; i++) {
            collection.item(i).addEventListener('click', Lightbox.enter);
        }
    }

    static enter(event) {
        event.target.removeEventListener('click', Lightbox.enter);
        event.target.classList.add('lightbox-active');

        let overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay')
        overlay.addEventListener('click', Lightbox.leave);

        document.body.appendChild(overlay);
    }

    static leave(event) {
        event.target.remove();

        let images = document.getElementsByClassName('lightbox-active');
        for (var i = 0; i < images.length; i++) {
            images.item(i).addEventListener('click', Lightbox.enter);
            images.item(i).classList.remove('lightbox-active');
        }
    }
}

new Lightbox();
