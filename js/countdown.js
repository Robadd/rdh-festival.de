// eslint-disable-next-line no-undef
Vue.component('countdown', {
    name: 'countdown',
    props: {
        'date': String,
        'header': Boolean,
        'mobile': Boolean
    },
    data: () => {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    },
    created: function () {
        this.refreshCounter();
    },
    computed: {
        className: {
            get() {

                if (!this.mobile) {
                    return 'col-6 col-md-3 p-0';
                } else {
                    return 'col-3 p-0';
                }
            }

        }
    },
    methods: {
        refreshCounter() {
            let that = this;
            let dateNow = new Date();
            let dateTo = new Date(this.date);
            let delta = (dateTo - dateNow);
            this.days = Math.floor(delta / (1000 * 60 * 60 * 24));
            delta -= this.days * 1000 * 60 * 60 * 24;
            this.hours = Math.floor(delta / (1000 * 60 * 60));
            delta -= this.hours * 1000 * 60 * 60;
            this.minutes = Math.floor(delta / (1000 * 60));
            delta -= this.minutes * 1000 * 60;
            this.seconds = Math.floor(delta / 1000);

            if (this.days == 0 && this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
                return;
            }

            window.setTimeout(() => {
                that.refreshCounter()
            }, 500);
        }
    },
    template: `<div class="col-4 p-0 container-fluid row m-0 float-right" id="countdown">
    <div :class="className">
        <div class="text-center col-12 font-weight-bold" id="days">{{days}}</div>
        <div class="text-center col-12 px-1 small">Tage</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold" id="hours">{{days}}</div>
        <div class="text-center col-12 px-1 small">Stunden</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold" id="minutes">{{minutes}}</div>
        <div class="text-center col-12 px-1 small">Minuten</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold" id="seconds">{{seconds}}</div>
        <div class="text-center col-12 px-1 small">Sekunden</div>
    </div>
</div>`
})