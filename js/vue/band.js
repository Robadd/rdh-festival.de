// eslint-disable-next-line no-undef, no-unused-vars
Vue.component('band', {
    name: 'band',
    props: {
        'bandName': String,
        'live': {
            type: Boolean,
            default: false
        },
        'from': Date,
        'to': Date,
        'innerClass': { type: String, default: '' },
        'needsComputing': { type: Boolean, default: false },
        'dateTime': Date
    },
    created() {

    },
    data: () => {
        return {

        }
    },
    computed: {
        playing() {
            let now = this.dateTime;
            if (now < this.from) return 'band-progress-0';
            if (now > this.to) return 'band-progress-100';
            const f = this.from.getTime();

            return 'band-progress-' + Math.floor((now.getTime() - f) / (this.to.getTime() - f) * 10) * 10;
        }
    },
    methods: {
        formatTime(date) { return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2); }
    },
    template: `
<div class="band-progress">
    <div class="bar" :class="playing"></div>
    <div class="band-name row" :class="innerClass">
        <div class="col-2">{{formatTime(from)}}</div>
        <div class="col-10">
            <span :class="">
                {{bandName}}
            </span>
            <sup v-if="live" clasS="text-warning">
                *live*
            </sup>
        </div>
    </div>
</div>`
})