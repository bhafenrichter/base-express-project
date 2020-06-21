"use strict";
/* eslint-disable no-unused-vars */
// import the css so webpack knows to minify it
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const css = require('./../css/index.scss');
// modules
const analytics = require('./modules/analytics/googleAnalytics/googleAnalytics');
analytics.init();
const vanilla_lazyload_1 = __importDefault(require("vanilla-lazyload"));
var lazyload = new vanilla_lazyload_1.default();
lazyload.update();
