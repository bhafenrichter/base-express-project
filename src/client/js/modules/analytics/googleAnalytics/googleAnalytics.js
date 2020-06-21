"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// google analytics
const analytics_1 = __importDefault(require("analytics"));
const google_analytics_1 = __importDefault(require("@analytics/google-analytics"));
let googleAnalyticsWrapper = {
    init: () => {
        let analytics = analytics_1.default({
            app: '<Google Analytics ID>',
            plugins: [
                google_analytics_1.default({
                    trackingId: '<Google Analytics ID>'
                })
            ]
        });
        console.log(google_analytics_1.default);
        analytics.page();
    },
};
module.exports = googleAnalyticsWrapper;
