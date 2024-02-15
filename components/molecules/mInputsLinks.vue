<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <div class="o-form-item__group-item" v-for="(item, index) in linksArray" :key="index">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeLinkInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <mLabel name="Name" nameDB="name" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <mLabel name="Link" nameDB="link" perex="" type="json" :required=false />
                        <input class="a-input -json" type="text" v-model="item.link" />
                    </div>
                </div>
            </div>
        </div>
        <div class="o-form-item__buttons mt-1">
            <div class="o-form-item__button">
                <div class="m-button-add">
                    <button class="m-button-add__input" type="button" @click="addLinkInput">Přidat odkaz</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import mLabel from '@/components/molecules/mLabel.vue'

    export default defineComponent({
        name: 'MoleculesmInputsLinksComponent',

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
                linksArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            addLinkInput() {
                this.linksArray.push({
                    name: '',
                    link: ''
                })
                this.$emit('links', this.linksArray)
            },
            removeLinkInput(index) {
                this.linksArray.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.linksArray = JSON.parse(this.value)
            },
            linksArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('links', this.linksArray)
                }
            }
        }
    })
</script>