// google analytics
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';


export default () => {
  // initialize analytics
  const analytics = Analytics({
    app: '<Google Analytics ID>',
    plugins: [
      googleAnalytics({
        trackingId: '<Google Analytics ID>'
      })
    ]
  });
  
  // track page
  analytics.page();
};
