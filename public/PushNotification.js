function registerServiceWorker() {
    return navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Service worker successfully registered.');
            return registration;
        })
        .catch(function (err) {
            console.error('Unable to register service worker.', err);
        });
}

function sendNotification(msg) {
    const title = 'Hey';
    registerServiceWorker()
        .then(function (registration) {
            const options = {
                body: 'Hi',
                icon: '/favicon.ico',
                tag: 12
            };
            registration.showNotification(title, options);
        });
}

function setup() {
    if (!('serviceWorker' in navigator)) {
        // Service Worker isn't supported on this browser, disable or hide UI.
        return;
    }

    if (!('PushManager' in window)) {
        // Push isn't supported on this browser, disable or hide UI.
        return;
    }

    let promiseChain = new Promise((resolve, reject) => {
        const permissionPromise = Notification.requestPermission((result) => {
            resolve(result);
        });
        if (permissionPromise) {
            permissionPromise.then(resolve);
        }
    })
        .then((result) => {
            if (result === 'granted') {
            }
        });
}

function setUpSWMessageListener() {
    /**** START swMessageListener ****/
    navigator.serviceWorker.addEventListener('message', function (event) {
        console.log('Received a message from service worker: ', event.data);
    });
    /**** END swMessageListener ****/
};
