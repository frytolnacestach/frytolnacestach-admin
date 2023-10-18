<template>
    <div class="o-form-item__group">
        <div class="o-form-item__group-items">
            <!-- Headline -->
            <div class="o-form-item__group-item" v-for="(item, index) in informationDurationArray" :key="index" v-if="informationDurationArray[0]?.headline">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationDurationHeadlineInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <label class="m-label">Title:</label>
                    <input class="a-input" type="text" v-model="item.headline.title" />

                    <label class="m-label">Perex:</label>
                    <input class="a-input" type="text" v-model="item.headline.perex" />
                </div>
            </div>
            <div class="o-form-item__buttons mt-1" v-if="!informationDurationArray[0]?.headline">
                <div class="o-form-item__button">
                    <div class="m-button-add">
                        <button class="m-button-add__input" type="button" @click="addInformationDurationHeadlineInput">Přidat hlavičku</button>
                    </div>
                </div>
            </div>
            <!-- Times -->
            <div class="o-form-item__group-item" v-for="(item, index) in informationDurationArray[0].times" :key="index" v-if="informationDurationArray[0]">
                <div class="m-button-remove">
                    <button class="m-button-remove__input" type="button" @click="removeInformationDurationTimesInput(index)">
                        Odstranit
                    </button>
                </div>
                <div class="o-form-item__group-inputs">
                    <div class="o-form-item__group-input">
                        <label class="m-label">Název:</label>
                        <input class="a-input" type="text" v-model="item.name" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Podnázev:</label>
                        <input class="a-input" type="text" v-model="item.subname" />
                    </div>
                    <div class="o-form-item__group-input">
                        <label class="m-label">Hodnota:</label>
                        <input class="a-input" type="text" v-model="item.value" />
                    </div>
                </div>
            </div>
            <div class="o-form-item__buttons mt-1">
                <div class="o-form-item__button">
                    <div class="m-button-add">
                        <button class="m-button-add__input" type="button" @click="addInformationDurationTimesInput">Přidat text</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputInformationDurationComponent',

        props: {
            value: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                informationDurationArray: this.isValidJSON(this.value) ? JSON.parse(this.value) : []
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
            // information durationHeadline
            addInformationDurationHeadlineInput() {
                if (this.informationDurationArray.length === 0) {
                    this.informationDurationArray.push({
                        headline: {
                            title: '',
                            perex: ''
                        }
                    })
                } else if (!this.informationDurationArray[0].hasOwnProperty('headline')) {
                    this.informationDurationArray[0].headline = {
                        title: '',
                        perex: ''
                    }
                }
                this.$emit('information-author', this.informationDurationArray)
            },
            removeInformationDurationHeadlineInput(index) {
                delete this.informationDurationArray[index].headline
            },
            // information durationTimes
            addInformationDurationTimesInput() {
                if (this.informationDurationArray.length === 0) {
                    this.informationDurationArray.push({
                        times: [
                            {
                                name: '',
                                subname: '',
                                value: ''
                            }
                        ]
                    })
                } else if (!this.informationDurationArray[0].hasOwnProperty('times')) {
                    this.informationDurationArray[0].times = [{
                        name: '',
                        subname: '',
                        value: ''
                    }]
                } else {
                    this.informationDurationArray[0].times.push({
                        name: '',
                        subname: '',
                        value: ''
                    })
                }
                this.$emit('information-duration', this.informationDurationArray)
            },
            removeInformationDurationTimesInput(index) {
                this.informationDurationArray[0].times.splice(index, 1)
            }
        },

        watch: {
            value(newValue, oldValue) {
                this.informationDurationArray = JSON.parse(this.value)
            },
            informationDurationArray: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('information-duration', this.informationDurationArray)
                }
            }
        }
    })
</script>