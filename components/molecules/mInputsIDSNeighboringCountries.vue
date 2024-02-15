<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="IDSneighboringCountriesArray && IDSneighboringCountriesArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in IDSneighboringCountriesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeIDSneighboringCountrieInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Název (in code ID)" nameDB="id" perex="" type="json" :required=false />
                        <span class="a-button-reset" v-if="placeSelect[index]">
                            <span class="a-button-reset__input" @click="removePlace(index)">Vybret jiné místo</span>
                        </span>
                        <input class="a-input hidden" type="number" min="0" v-model="item.id" />
                        <input class="a-input" type="text" disabled="true" v-model="placeSelect[index]" v-if="placeSelect[index]" />
                        <input class="a-input -json" type="text" v-model="searchQuery" v-if="!placeSelect[index]" />
                        <div class="m-search-list-input__items" v-if="!item.id">
                            <ul class="m-search-list-input__items">
                                <li class="m-search-list-input__item" v-for="place in searchResult" :key="place.id" @click="selectPlace(place.id, place.name, index)">
                                    {{ place.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((IDSneighboringCountriesArray && IDSneighboringCountriesArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addIDSneighboringCountrieInput">Přidat stát</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsIDSNeighboringCountriesComponent',

        //COMPONENTS
        components: {
            mLabel
        },

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                IDSneighboringCountriesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : [],
                loadPlaces: [],
                placeSelect: []
            }
        },

        methods: {
            isValidJSON(value) {
                try {
                    JSON.parse(value)
                    return true
                } catch (e) {
                    return false
                }
            },
            addIDSneighboringCountrieInput() {
                this.IDSneighboringCountriesArray.push({
                    id: null
                })
                this.$emit('ids-neighboring-countries', this.IDSneighboringCountriesArray)
            },
            removeIDSneighboringCountrieInput(index) {
                this.IDSneighboringCountriesArray.splice(index, 1)
            },
            selectPlace(id, name, index) {
                this.IDSneighboringCountriesArray[index].id = id
                this.placeSelect[index] = name;
                this.searchQuery = ''
                this.searchResult = []
            },
            removePlace(index) {
                this.IDSneighboringCountriesArray.splice(index, 1)
                this.placeSelect.splice(index, 1);
            },
            checkExstingName() {
                if (this.IDSneighboringCountriesArray[0] && this.IDSneighboringCountriesArray[0].id && !this.placeSelect[0]) {
                    this.load(this.IDSneighboringCountriesArray)
                }
            },
            load(ids) {
                const runTimeConfig = useRuntimeConfig()
                const placesID = ids.map(place => place.id) || []

                fetch(`${runTimeConfig.public.baseURL}/places-states-array?showType=list&id=${placesID.join(',')}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    this.loadPlaces = data

                    const sortedNames = ids.map(place => {
                        const matchingPlace = this.loadPlaces.find(loadPlace => loadPlace.id === place.id)
                        return matchingPlace ? matchingPlace.name : ''
                    })

                    this.placeSelect = sortedNames
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
            value(newValue, oldValue) {
                this.IDSneighboringCountriesArray = JSON.parse(this.value)
            },
            IDSneighboringCountriesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('ids-neighboring-countries', this.IDSneighboringCountriesArray)
                }
            },
            searchQuery: function(newSearchQuery, oldSearchQuery) {
                if (newSearchQuery.length >= 1) {
                    this.search()
                } else {
                    this.searchResult = []
                }
            }
        }
    })
</script>