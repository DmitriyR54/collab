// styles
import 'modern-normalize/modern-normalize.css';
import '../../assets/fonts/fonts.scss';
import 'Src/styles/styles.scss';
import './Home.scss';
// components
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import { hideLoadingScreen } from 'Sections/LoadingScreen/LoadingScreen';
// sections
import 'Sections/Header/Header';
import 'Sections/Intro/Intro.scss';
import 'Sections/Partners/Partners';
import 'Sections/Features/Features';
import 'Sections/Footer/Footer.scss';

window.addEventListener('DOMContentLoaded', () => {
    // hide the loading screen
    hideLoadingScreen();
    // load the images
    lazyLoadImages();
});
