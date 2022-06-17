// eslint-disable-next-line no-undef
new Vue({
    el: '#wrapper',
    data: {
        menuOpened: false,
        content: "home"
    },
    methods: {
        toggleMenu() {
            let left;
            let bgColor;
            let pointer;
            if (this.menuOpened) {
                left = '-60vw';
                bgColor = "rgba(0, 0, 0, 0)";
                pointer = "none";
                this.menuOpened = false;
            } else {
                left = '0';
                bgColor = "rgba(0, 0, 0, 0.5)";
                pointer = "all";
                this.menuOpened = true;
            }
            document.querySelector('#mobile-header > nav').style.left = left;
            document.querySelector('#mobile-backdrop').style.backgroundColor = bgColor;
            document.querySelector('#mobile-backdrop').style.pointerEvents = pointer;

        },
        switchContent(val, menu) {
            this.content = val;
            localStorage.setItem("content", val);
            if (menu) {
                this.toggleMenu();
            }
        },
        sendMsg() {
            navigator.serviceWorker.controller.postMessage("");
        },
        requestPermission() {
            navigator.serviceWorker.getRegistration().then((reg) => {
                reg.pushManager.subscribe();
            })

        }
    },
    created() {
        const store = localStorage.getItem("content");
        if (store != null) {
            this.content = store;
        }
    }
});