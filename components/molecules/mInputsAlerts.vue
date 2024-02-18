<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items" v-if="alertsArray && alertsArray.length > 0">
            <div class="o-form-item__group-item" v-for="(item, index) in alertsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeAlertInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Text" nameDB="text" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.text" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Type" nameDB="type" perex="" type="json" :required=false />
                        <div class="m-select -json">
                            <select class="m-select__select" name="platform" v-model="item.type" required>
                                <option value="">- Vyber typ upozornění -</option>
                                <option value="red">Red</option>
                                <option value="orange">Orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="gray">Gray</option>
                            </select>
                        </div>
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date start" nameDB="date_start" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_start" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date end" nameDB="date_end" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_end" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author" nameDB="author" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author update" nameDB="author_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date create" nameDB="date_create" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date update" nameDB="date_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_update" />
                    </div>
                </div>
            </div>
        </div>
        <div :class="'o-form-item__buttons' + ((alertsArray && alertsArray.length > 0) ? 'mt-1' : '')">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addAlertInput">Přidat upozornění</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsAlertsComponent',

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
                alertsArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addAlertInput() {
                this.alertsArray.push({
                    name: '',
                    text: '',
                    type: '',
                    date_start: '',
                    date_end: '',
                    author: '',
                    author_update: '',
                    date_create: '',
                    date_update: '',
                })
                this.$emit('alerts', this.alertsArray)
            },
            removeAlertInput(index) {
                this.alertsArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.alertsArray = JSON.parse(this.value)
            },
            alertsArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('alerts', this.alertsArray)
                }
            }
        }
    })
</script>