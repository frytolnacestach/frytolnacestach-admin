<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in timesArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeTimeInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Subname" nameDB="subname" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.subname" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Value" nameDB="value" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.value" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addTimeInput">Přidat čas</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsTimesComponent',

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
                timesArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addTimeInput() {
                this.timesArray.push({
                    name: '',
                    subname: '',
                    value: ''
                })
                this.$emit('times', this.timesArray)
            },
            removeTimeInput(index) {
                this.timesArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.timesArray = JSON.parse(this.value)
            },
            timesArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('times', this.timesArray)
                }
            }
        }
    })
</script>