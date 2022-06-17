// eslint-disable-next-line no-undef
new Vue({
    el: '#wrapper',
    data: {
        menuOpened: false
    },
    methods: {
        toggleMenu() {
            let left;
            if (this.menuOpened) {
                left = '-60vw';
                this.menuOpened = false;
            } else {
                left = '0';
                this.menuOpened = true;
            }
            document.querySelector('#mobile-header > nav').style.left = left;
        },
        sendMsg() {
            navigator.serviceWorker.controller.postMessage("");
        },
        requestPermission() {
            navigator.serviceWorker.getRegistration().then((reg) => {
                reg.pushManager.subscribe();
            })

        }
    }
});