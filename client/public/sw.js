async function createNotificationSubscription() {
  //wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  // subscribe and return the subscription
  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey,
  });
}

const API_URL = process && process.env && process.env.REACT_REACT_APP_API_URL || "https://whispering-springs-27123.herokuapp.com/";

async function postSubscription(subscription) {
  const response = await fetch(`${API_URL}/api/subscription`, {
    credentials: "omit",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-mode": "cors",
    },
    body: JSON.stringify(subscription),
    method: "POST",
    mode: "cors",
  });
  return await response.json();
}

function receivePushNotification(event) {
  console.log("[Service Worker] Push Received.");
  const { image, tag, url, title, text } = event.data.json();
  const options = {
    data: url,
    body: text,
    icon: image,
    vibrate: [200, 100, 200],
    tag: tag,
    image: image,
    badge: "/favicon.ico",
    actions: [
      {
        action: "Detail",
        title: "View",
        icon: "https://via.placeholder.com/128/ff0000",
      },
    ],
  };
  event.waitUntil(self.registration.showNotification(title, options));
}

function openPushNotification(event) {
  console.log("Notification click Received.", event.notification);
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data));
}
self.addEventListener("push", receivePushNotification);
self.addEventListener("notificationclick", openPushNotification);
