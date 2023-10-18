<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in alertsArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeAlertInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Name:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Text:</label>
                        <input class="a-input" type="text" v-model="item.text" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Type:</label>
                        <input class="a-input" type="text" v-model="item.type" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Author:</label>
                        <input class="a-input" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date create:</label>
                        <input class="a-input" type="text" v-model="item.date_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date update:</label>
                        <input class="a-input" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date start:</label>
                        <input class="a-input" type="text" v-model="item.date_start" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Date end:</label>
                        <input class="a-input" type="text" v-model="item.date_end" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addAlertInput">Přidat upozornění</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputsAlertsComponent',

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
                    author: '',
                    date_create: '',
                    date_update: '',
                    date_start: '',
                    date_end: ''
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