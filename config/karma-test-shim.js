var appContext = require.context('../src/app', true, /\.spec\.js/);
appContext.keys().forEach(appContext);
