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
    created: function() {
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

            let delta = (new Date(this.date).getTime() - new Date().getTime());
            if (delta < 0) return;

            const days = Math.floor(delta / (1000 * 60 * 60 * 24));
            delta -= days * 1000 * 60 * 60 * 24;

            const hours = Math.floor(delta / (1000 * 60 * 60));
            delta -= hours * 1000 * 60 * 60;

            const minutes = Math.floor(delta / (1000 * 60));
            delta -= minutes * 1000 * 60;

            const seconds = Math.floor(delta / (1000));


            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;

            if (this.days == 0 && this.hours == 0 && this.minutes == 0 && this.seconds == 0) {
                return;
            }

            window.setTimeout(() => {
                that.refreshCounter()
            }, 500);
        }
    },
    template: `<div class="col-4 p-0 row m-0 float-right container-fluid countdown">
    <div :class="className">
        <div class="text-center col-12 font-weight-bold">{{days}}</div>
        <div class="text-center col-12 px-1 small">Tag{{days!=1?'e':''}}</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold">{{hours}}</div>
        <div class="text-center col-12 px-1 small">Stunde{{hours!=1?'n':''}}</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold">{{minutes}}</div>
        <div class="text-center col-12 px-1 small">Minute{{minutes!=1?'n':''}}</div>
    </div>
    <div :class="className">
        <div class="text-center col-12 font-weight-bold">{{seconds}}</div>
        <div class="text-center col-12 px-1 small">Sekunde{{seconds!=1?'n':''}}</div>
    </div>
</div>`
})