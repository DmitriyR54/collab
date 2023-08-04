import './lazyLoadImages.scss';

const lazyLoadImages = () => {
    const images = document.querySelectorAll('.lazy-image');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // <figure> element
                const imageWrapper = entry.target;

                // children <img> element
                const image = imageWrapper.querySelector('img');
                const dataSrc = image.getAttribute('data-src');

                // download the image
                import(/* webpackMode: "eager" */ `Src/assets/images/lazyload/${dataSrc}`).then((src) => {
                    image.setAttribute('src', src.default);
                    image.addEventListener('load', () => {
                        imageWrapper.classList.add('image--loaded');
                    });
                });

                observer.unobserve(image);
            }
        });
    };

    // observer options
    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(callback, options);

    images.forEach((img) => observer.observe(img));
};

export { lazyLoadImages };
