/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDvWdLFzL29EVPYY6mAthEzk4QlIgGjuoQ',
  authDomain: 'taphaus-6cc3c.firebaseapp.com',
  projectId: 'taphaus-6cc3c',
  storageBucket: 'taphaus-6cc3c.firebasestorage.app',
  messagingSenderId: '414450496098',
  appId: '1:414450496098:web:aeeb205e6e238a7af0173b',
  measurementId: 'G-EWBEQK78HB',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  idbKeyval.set(notificationTitle, notificationOptions.body);
});
