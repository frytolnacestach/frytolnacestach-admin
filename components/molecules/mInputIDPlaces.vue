<template>
    <span @click="removePlace()" v-if="placeSelect">Vybret jiné místo</span>
    <input class="a-input hidden" type="number" min="0" :name="name" v-model="id" :required="required" />
    <input class="a-input" type="text" disabled="true" v-model="placeSelect" v-if="placeSelect" />
    <input class="a-input" type="text" v-model="searchQuery" v-if="!placeSelect" />
    <ul>
        <li v-for="place in searchResult" :key="place.id" @click="selectPlace(place.id, place.name)">
            {{ place.name }}
        </li>
    </ul>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputIDPlaceComponent',

        props: {
            value: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            required: {
                type: Boolean,
                required: false
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                id: this.value,
                placeSelect: ''
            }
        },

        methods: {
            selectPlace(id, name) {
                this.id = id
                this.placeSelect = name
                this.searchQuery = ''
                this.searchResult = []
            },
            removePlace() {
                this.id = null
                this.placeSelect = ''
            }
        },

        setup(props) {
            const runTimeConfig = useRuntimeConfig()
            const searchQuery = ref('')
            const searchResult = ref([])

            const search = async () => {
                fetch(`${runTimeConfig.public.baseURL}/search-admin?type=${props.type}&search=${searchQuery.value}&page=1&items=20`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    searchResult.value = data
                })
            }

            return {
                searchQuery,
                searchResult,
                search
            }
        },

        watch: {
            // Change image ID
            id(newValue, oldValue) {
                this.$emit('id-place', this.id)
            },
            searchQuery: function(newSearchQuery, oldSearchQuery) {
                if (newSearchQuery.length >= 1) {
                    this.search()
                } else {
                    this.searchResult = []
                }
            }
        },
    })
</script>