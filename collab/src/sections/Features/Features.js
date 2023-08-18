import './Features.scss';

setTimeout(() => {
    const sections = document.querySelectorAll('.features__description');

    // observer function
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('.features__description-img');

                img.style.opacity = 1;
                img.style.transform = 'translate3d(0, 0, 0)';

                observer.unobserve(entry.target);
            }
        });
    };

    // observer options
    const options = {
        threshold: 0.25,
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((el) => {
        observer.observe(el);
    });
}, 50);
