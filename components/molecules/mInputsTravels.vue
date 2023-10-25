<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in travelsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTravelInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Icon" nameDB="icon" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.icon" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Text" nameDB="text" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTravelInput">Přidat položku</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsTravelsComponent',

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
                travelsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTravelInput() {
                this.travelsArray.push({
                    icon: '',
                    name: '',
                    text: ''
                })
                this.$emit('travels', this.travelsArray)
            },
            removeTravelInput(index) {
                this.travelsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.travelsArray = JSON.parse(this.value)
            },
            travelsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('travels', this.travelsArray)
                }
            }
        }
    })
</script>