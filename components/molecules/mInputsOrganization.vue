<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in organizationArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeOrganizationInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Date" nameDB="date" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.date" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author" nameDB="author" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.author" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date update" nameDB="date_update" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.date_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Author update" nameDB="author_update" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.author_update" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Date add to organization" nameDB="date_add_to_organization" perex="" type="json" :required=false />
                        <input class="a-input" type="text" v-model="item.date_add_to_organization" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addOrganizationInput">Přidat organizaci</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsOrganizationComponent',

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
                organizationArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addOrganizationInput() {
                this.organizationArray.push({
                    date: '',
                    name: '',
                    author: '',
                    date_update: '',
                    author_update: '',
                    date_add_to_organization: ''
                })
                this.$emit('organization', this.organizationArray)
            },
            removeOrganizationInput(index) {
                this.organizationArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.organizationArray = JSON.parse(this.value)
            },
            organizationArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('organization', this.organizationArray)
                }
            }
        }
    })
</script>