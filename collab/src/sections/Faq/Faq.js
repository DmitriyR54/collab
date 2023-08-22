import './Faq.scss';

// debounce function prevents too many function invocations during resize
function debounce(func) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, 100);
    };
}

// set height of the opened accordion item equals to the content height
function setHeight(item) {
    const contentWrapper = item.querySelector('.accordion__content-wrapper');
    const contentHeight = item.querySelector('.accordion__content').offsetHeight;

    contentWrapper.style.height = `${contentHeight}px`;
}

// all accordion items
const items = document.querySelectorAll('.accordion__item');

items.forEach((item) => {
    let state = false;

    const accordionTitle = item.querySelector('.accordion__title');

    accordionTitle.addEventListener('click', () => {
        state = !state;

        if (state) {
            setHeight(item);

            item.classList.add('accordion__item--active');
        } else {
            item.querySelector('.accordion__content-wrapper').style.height = 0;

            item.classList.remove('accordion__item--active');
        }

        // debounce function prevents too many function invocations during resize
        const setHeightResize = debounce(() => setHeight(item));

        window.addEventListener('resize', () => {
            if (state) {
                setHeightResize();
            }
        });
    });
});
