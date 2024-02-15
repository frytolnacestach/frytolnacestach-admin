<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in IDSstatesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeIDSstateInput(index)">
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
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addIDSstateInput">Přidat stát</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsIDSStatesComponent',

        //COMPONENTS
        components: {
            mLabel
        },

        props: {
            value: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                IDSstatesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : [],
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
            addIDSstateInput() {
                this.IDSstatesArray.push({
                    id: null
                })
                this.$emit('ids-states', this.IDSstatesArray)
            },
            removeIDSstateInput(index) {
                this.IDSstatesArray.splice(index, 1)
            },
            selectPlace(id, name, index) {
                this.IDSstatesArray[index].id = id
                this.placeSelect[index] = name;
                this.searchQuery = ''
                this.searchResult = []
            },
            removePlace(index) {
                this.IDSstatesArray.splice(index, 1)
                this.placeSelect.splice(index, 1);
            },
            checkExstingName() {
                if (this.IDSstatesArray[0].id && !this.placeSelect[0]) {
                    this.load(this.IDSstatesArray)
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
                this.IDSstatesArray = JSON.parse(this.value)
            },
            IDSstatesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('ids-states', this.IDSstatesArray)
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