/* eslint-disable no-unused-vars */
// import the css so webpack knows to minify it
import css from './../css/index.scss';

import home from './pages/home';

// modules
import analytics from './modules/googleAnalytics';

import LazyLoad from 'vanilla-lazyload';

var lazyload = new LazyLoad();
lazyload.update();