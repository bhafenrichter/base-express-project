// google analytics
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

let googleAnalyticsWrapper : Analytics = {
  init: () => {
    let analytics = Analytics({
      app: '<Google Analytics ID>',
      plugins: [
        googleAnalytics({
          trackingId: '<Google Analytics ID>'
        })
      ]
    });

    console.log(googleAnalytics);
    analytics.page();
  },
};

module.exports = googleAnalyticsWrapper;