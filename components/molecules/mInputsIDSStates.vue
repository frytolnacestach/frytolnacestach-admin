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
                        <mLabel name="ID" nameDB="id" perex="" type="json" :required=false />
                        <span @click="removePlace(index)" v-if="placeSelect[index]">Vybret jiné místo</span>
                        <input class="a-input hidden" type="number" min="0" v-model="item.id" />
                        <input class="a-input" type="text" disabled="true" v-model="placeSelect[index]" v-if="placeSelect[index]" />
                        <input class="a-input" type="text" v-model="searchQuery" v-if="!placeSelect[index]" />
                        <ul v-if="!item.id">
                            <li v-for="place in searchResult" :key="place.id" @click="selectPlace(place.id, place.name, index)">
                                {{ place.name }}
                            </li>
                        </ul>
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