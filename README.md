# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# onesignal

[Error] Unhandled Promise Rejection: TypeError: i.showNotification is not a function. (In 'i.showNotification(e,o)', 'i.showNotification' is undefined)
[Error] n: processSubscriptionModel: missing onesignalId: {"subscribers":{},"modelName":"pushSubscriptions","modelId":"qa3diyvpz8i","data":{"type":"SafariLegacyPush","token":"13310fb2d4b0611ca84fa500b2c5e4cfa6f683d56c60e51296518788e5dd3fa7","enabled":true,"notification_types":1,"sdk":"160202","device_model":"MacIntel","device_os":17.06},"awaitOneSignalIdAvailable":{}}
n — OneSignalError.js:3
Ui — helpers.js:18
(anonymous function) — SubscriptionRequests.js:32
(anonymous function) — tslib.es6.js:121
Promise
o — tslib.es6.js:117
(anonymous function) — ExecutorBase.js:117:98
r — tslib.es6.js:118

	(anonymous function) (OneSignalSDK.page.es6.js:1:205939)
