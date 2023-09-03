// styles
import 'modern-normalize/modern-normalize.css';
import '../../assets/fonts/fonts.scss';
import 'Src/styles/styles.scss';
// components
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import { hideLoadingScreen } from 'Sections/LoadingScreen/LoadingScreen';
// sections
import 'Sections/Header/Header';
import 'Sections/Intro/Intro.scss';
import 'Sections/Partners/Partners';
import 'Sections/Features/Features';
import 'Sections/Testimonials/Testimonials.scss';
import 'Sections/Banner/Banner.scss';
import 'Sections/Faq/Faq';
import 'Sections/Download/Download.scss';
import 'Sections/Subscribe/Subscribe.scss';
import 'Sections/Footer/Footer.scss';

window.addEventListener('DOMContentLoaded', () => {
    // hide the loading screen
    hideLoadingScreen();
    // load the images
    lazyLoadImages();
});
