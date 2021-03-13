/* eslint-disable no-unused-vars */
// import the css so webpack knows to minify it
const css = require('./../css/index.scss');

// modules
// const analytics = require('./modules/analytics/googleAnalytics/googleAnalytics');
// analytics.init();

import LazyLoad from 'vanilla-lazyload';

var lazyload = new LazyLoad();
lazyload.update();

console.log('tests testington');
