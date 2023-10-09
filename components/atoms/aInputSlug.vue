<template>
    <input class="a-input" type="text" name="slug" v-model="slug" @input="handleInput" required />
</template>

<script>
    export default defineComponent({
        name: 'MoleculesaInputSlugComponent',

        props: {
            value: {
                type: String,
                required: true
            },
            valueCreate: {
                type: String,
                required: false
            },
            edit: {
                type: Boolean,
                required: true
            }
        },

        data() {
            return {
                customSlug: false,
                slug: this.value,
                name: this.valueCreate
            }
        },

        computed: {
            name: {
                get() {
                    return this.valueCreate
                },
                set(newValue) {
                    this.name = newValue
                }
            },
            slug: {
                get() {
                    return this.value
                },
                set(newValue) {
                    this.slug = newValue
                }
            }
        },

        created() {
            if (this.value || !this.edit) {
                this.customSlug = true
            }
        },

        methods: {
            // Generat slug from name
            generateSlugFromText(text) {
                return text
                    .toLowerCase()
                    // Nahrazení speciálních znaků
                    .replace(/ /g, '-')
                    .replace(/'/g, '-')
                    .replace(/`/g, '-')
                    .replace(/\./g, '-')
                    .replace(/’/g, '-')
                    .replace(/–/g, '-')
                    .replace(/\(/g, '-')
                    .replace(/\)/g, '-')
                    // Nahrazení znaků A
                    .replace(/á/g, 'a')
                    .replace(/å/g, 'a')
                    .replace(/ã/g, 'a')
                    .replace(/à/g, 'a')
                    .replace(/â/g, 'a')
                    .replace(/ä/g, 'a')
                    .replace(/ẵ/g, 'a')
                    .replace(/ầ/g, 'a')
                    .replace(/ả/g, 'a')
                    .replace(/ă/g, 'a')
                    .replace(/æ/g, 'a')
                    .replace(/ā/g, 'a')
                    // Nahrazení znaků C
                    .replace(/č/g, 'c')
                    .replace(/ç/g, 'c')
                    .replace(/ć/g, 'c')
                    // Nahrazení znaků D
                    .replace(/ď/g, 'd')
                    .replace(/đ/g, 'd')
                    // Nahrazení znaků E
                    .replace(/é/g, 'e')
                    .replace(/ě/g, 'e')
                    .replace(/ë/g, 'e')
                    .replace(/ə/g, 'e')
                    .replace(/è/g, 'e')
                    .replace(/ê/g, 'e')
                    .replace(/ế/g, 'e')
                    .replace(/ē/g, 'e')
                    .replace(/ė/g, 'e')
                    // Nahrazení znaků H
                    .replace(/ḥ/g, 'h')
                    .replace(/ḩ/g, 'h')
                    // Nahrazení znaků I
                    .replace(/í/g, 'i')
                    .replace(/ī/g, 'i')
                    .replace(/ï/g, 'i')
                    .replace(/ı/g, 'i')
                    .replace(/î/g, 'i')
                    // Nahrazení znaků L
                    .replace(/ł/g, 'l')
                    // Nahrazení znaků N
                    .replace(/ň/g, 'n')
                    .replace(/ñ/g, 'n')
                    .replace(/ń/g, 'n')
                    // Nahrazení znaků O
                    .replace(/ô/g, 'o')
                    .replace(/ő/g, 'o')
                    .replace(/ø/g, 'o')
                    .replace(/ø/g, 'o')
                    .replace(/ð/g, 'o')
                    .replace(/ó/g, 'o')
                    .replace(/ö/g, 'o')
                    .replace(/ò/g, 'o')
                    .replace(/ơ/g, 'o')
                    .replace(/ộ/g, 'o')
                    .replace(/ŏ/g, 'o')
                    .replace(/œ/g, 'o')
                    // Nahrazení znaků R
                    .replace(/ř/g, 'r')
                    // Nahrazení znaků S
                    .replace(/š/g, 's')
                    .replace(/ş/g, 's')
                    .replace(/ș/g, 's')
                    // Nahrazení znaků T
                    .replace(/ť/g, 't')
                    .replace(/ț/g, 't')
                    // Nahrazení znaků U
                    .replace(/ü/g, 'u')
                    .replace(/ú/g, 'u')
                    .replace(/ů/g, 'u')
                    .replace(/ŭ/g, 'u')
                    .replace(/ū/g, 'u')
                    // Nahrazení znaků Y
                    .replace(/ý/g, 'y')
                    // Nahrazení znaků Z
                    .replace(/ž/g, 'z')
                    .replace(/ź/g, 'z')
                    .replace(/[^a-zA-Z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
            },

            // write to input for slug
            handleInput() {
                this.customSlug = true
            }
        },

        watch: {
            // Change data from parent
            valueCreate(newValue, oldValue) {
                if (!this.customSlug) {
                    this.name = newValue
                    this.slug = this.generateSlugFromText(this.name)
                }
            },

            // Create slug from name
            name(newValue, oldValue) {
                if(!this.customSlug) {
                    this.slug = this.generateSlugFromText(this.name)
                    // Send to parent
                    this.$emit('slug', this.slug)
                }
            }
        },
    })
</script>