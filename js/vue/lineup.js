// eslint-disable-next-line no-undef, no-unused-vars
Vue.component('lineup', {
    name: 'VueLineUp',
    props: {

    },
    created() {
        let that = this;
        fetch('/js/bands.json')
            .then(response => response.json())
            .then(data => that.sortToDays(data))
        that.$nextTick(() => {
            that.refresh(that);
        })
    },
    data: () => {
        return {
            thursday: [],
            friday: [],
            saturday: [],
            dateTime: new Date(),
            noData: true
        }
    },
    computed: {

    },
    methods: {
        refresh(self) {
            self.dateTime = new Date();
            setInterval(() => {
                self.refresh(self);
            }, 1000 * 60);
        },
        sortToDays(bandArray) {
            if (bandArray == null || !Array.isArray(bandArray) || bandArray.length == 0) {
                return;
            }
            this.data = true;
            bandArray.forEach((band) => {
                const mapped = {
                    from: new Date(band.from),
                    to: new Date(band.to),
                    name: band.name,
                    live: band.live == null ? false : band.live
                }

                const day = mapped.from.getDay();
                if (day == 4) {
                    this.thursday.push(mapped);
                } else if (day == 5) {
                    this.friday.push(mapped);
                } else if (day == 6) {
                    this.saturday.push(mapped);
                }
            })
            this.thursday.sort((a, b) => a.from.getTime() < b.from.getTime() ? -1 : 1);
            this.friday.sort((a, b) => a.from.getTime() < b.from.getTime() ? -1 : 1);
            this.saturday.sort((a, b) => a.from.getTime() < b.from.getTime() ? -1 : 1);
        },
        needsComputing(day) {
            const now = this.dateTime.getDay();
            return day == now;
        }
    },
    template: `<div class="row" v-if="!noData">
    <band-day :needs-computing="needsComputing(4)" :dateTime="dateTime" :bands="thursday" class="col-12 col-md-6">
        <div slot="header" class="text-center text-info">Donnerstag</div>
    </band-day>
    <band-day :needs-computing="needsComputing(5)" :dateTime="dateTime" :bands="friday" class="col-12 col-md-6">
        <div slot="header" class="text-center text-info">Freitag</div>
    </band-day>
    <band-day :needs-computing="needsComputing(6)" :dateTime="dateTime" :bands="saturday" class="col-12 col-md-6">
        <div slot="header" class="text-center text-info">Samstag</div>
    </band-day>
</div>
<div v-else>
    Leider keine Daten vorhanden
</div>`
})