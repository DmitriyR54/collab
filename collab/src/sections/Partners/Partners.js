import './Partners.scss';

const section = document.querySelector('.partners');

// observer function
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('partners--active');

            observer.unobserve(entry.target);
        }
    });
};

// observer options
const options = {
    threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(section);
