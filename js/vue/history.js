Vue.component('ribbon', {
    name: 'ribbon',
    props: {
        'year': Number,
    },
    computed: {
        imgSrc: {
            get() {
                return "img\\ribbons\\" + this.year + ".png";
            }
        }
    },
    template: `<div class="card mb-2 border-light" style="background-color: var(--header-bg-color) !important;">
        <div class="card-header text-center p-1">{{year}}</div>
        <img :src="imgSrc" class="card-img-bottom border-secondary">
    </div>`
})

Vue.component('history', {
    name: 'history',
    data: () => {
        return {
            years: [2019, 2018, 2017, 2016, 2015]
        }
    },
    template: `<div>
        <h1>Festivalbänder</small></h1>
        <template v-for="year in this.years">
            <ribbon :year="year"></ribbon>
        </template>
    </div>`
})