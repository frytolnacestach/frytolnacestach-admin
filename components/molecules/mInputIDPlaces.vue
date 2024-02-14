<template>
    <span class="a-button-reset" v-if="placeSelect">
        <span class="a-button-reset__input" @click="removePlace()">Vybret jiné místo</span>
    </span>
    <input class="a-input hidden" type="number" min="0" :name="name" v-model="id" :required="required" />
    <input class="a-input" type="text" disabled="true" v-model="placeSelect" v-if="placeSelect" />
    <input class="a-input" type="text" v-model="searchQuery" v-if="!placeSelect" />
    <div class="m-search-list-input__items" v-if="searchResult && searchResult.length > 0">
        <ul class="m-search-list-input__items">
            <li class="m-search-list-input__item" v-for="place in searchResult" :key="place.id" @click="selectPlace(place.id, place.name)">
                {{ place.name }}
            </li>
        </ul>
    </div>
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
                loadPlace: [],
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
            },
            checkExstingName() {
                if (this.id && !this.placeSelect) {
                    this.load(this.id, this.type)
                }
            },
            load(id, type) {
                const runTimeConfig = useRuntimeConfig()
                fetch(`${runTimeConfig.public.baseURL}/places-continent-id/${id}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    this.loadPlace = data
                    this.placeSelect = this.loadPlace[0].name
                })
            }
        },

        mounted() {
            this.checkExstingName()
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