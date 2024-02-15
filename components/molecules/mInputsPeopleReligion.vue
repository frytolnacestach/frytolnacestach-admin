<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in peopleReligionArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removePeopleReligionInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Value" nameDB="value" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.value" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date create" nameDB="date_create" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date update" nameDB="date_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author create" nameDB="author_create" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author_create" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author update" nameDB="author_update" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.author_update" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addPeopleReligionInput">Přidat náboženství</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputPeopleReligionComponent',

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
                peopleReligionArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addPeopleReligionInput() {
                this.peopleReligionArray.push({
                    name: '',
                    value: '',
                    date_create: '',
                    date_update: '',
                    author_create: null,
                    author_update: null
                })
                this.$emit('people-religion', this.peopleReligionArray)
            },
            removePeopleReligionInput(index) {
                this.peopleReligionArray.splice(index, 1)
            },
        },

        watch: {
            value(newValue, oldValue) {
                this.peopleReligionArray = JSON.parse(this.value)
            },
            peopleReligionArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('people-religion', this.peopleReligionArray)
                }
            }
        }
    })
</script>