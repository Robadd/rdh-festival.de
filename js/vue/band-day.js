// eslint-disable-next-line no-undef, no-unused-vars
Vue.component('band-day', {
    name: 'VueBandDay',
    props: {
        bands: Array,
        needsComputing: Boolean,
        dateTime: Date
    },
    data: () => {
        return {

        }
    },
    methods: {

    },
    template: `<div class="">
    <slot name="header" class=""/>
    <template v-for="band in bands">
        <band class="col-12" 
            :bandName="band.name" 
            :live="band.live" 
            :from="band.from" 
            :to="band.to" 
            innerClass="text-white" 
            :dateTime="dateTime"
            :needsComputing="needsComputing" />
    </template>
</div>`
})