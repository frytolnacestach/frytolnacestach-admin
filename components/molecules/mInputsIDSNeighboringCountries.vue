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
                        <mLabel name="ID" nameDB="id" perex="" type="json" :required=false />
                        <input class="a-input -json" type="number" min="0" v-model="item.id" />
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
                IDSneighboringCountriesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            }
        }
    })
</script>