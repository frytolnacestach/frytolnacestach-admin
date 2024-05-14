<template>
    <div class="o-form-item__image">
        <div class="o-form-item__image-lazyload" :class="{'-loading': IDimageLoading}">
            <img class="o-form-item__image-file -small" :src="`https://image.frytolnacestach.cz/storage${image[0].source + image[0].name}.webp`" v-if="image && image.length > 0" @load="handleImageLoad">
        </div>
        <span class="o-form-item__image-text" v-if="image && image.length > 0 && (id && id !== null && id !== 0) && IDimageLoad !== IDimageChange">Byl vybrán nový obrázek</span>
        <span class="o-form-item__image-text" v-if="image && image.length === 0 && (!id || id === null || id === 0) && IDimageLoad !== IDimageChange">Obrázek byl odebrán</span>
        <span class="o-form-item__image-text" v-if="image && image.length === 0 && id && IDimageLoad !== IDimageChange">Byl vybrán nový obrázek ale bohužel ten neexistuje</span>
        <span class="o-form-item__image-text" v-if="image && image.length === 0 && id && id !== null && id !== 0 && IDimageLoad === IDimageChange">Vybraní obrázek neexistuje</span>
        <span class="o-form-item__image-text" v-if="image && image.length === 0 && (!id || id === null || id === 0)">Zatím nebyl vybrán žádní obrázek</span>
        <input class="a-input -c-gray" type="number" min="0" name="imageCover" v-model="id" @input="handleIDimageChange" />
    </div>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmInputImageComponent',

        props: {
            value: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                id: this.value,
                IDimageLoad: null,
                IDimageLoading: false,
                IDimageChange: null
            }
        },

        setup(props) {
            //CONSTS
            const runTimeConfig = useRuntimeConfig()
            const image = ref(null)
            const id = ref(props.value)
            const IDimageLoading = ref(props.IDimageLoading)

            //API - Image
            ;(async () => {
                IDimageLoading.value = true
                // Načítání image
                if (id.value) {
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${id.value}`, {
                        method: 'GET'
                    }).then(res => res.json()).then(data => image.value = data)
                } else {
                    image.value = []
                }
            })()

            const loadImage = async () => {
                IDimageLoading.value = true
                try {
                    // Načítání image
                    fetch(`${runTimeConfig.public.baseURL}/image-id/${id.value}`, {
                        method: 'GET'
                    }).then(res => res.json()).then(data => image.value = data)
                } catch (err) {
                    errorForm.value = "Chyba připojení k API"
                }
            }

            //RETURN
            return {
                id,
                image,
                IDimageLoading,
                loadImage
            }
        },

        methods: {
            // change image id
            handleIDimageChange() {
                this.IDimageChange = this.id
                this.IDimageLoading = true
                this.loadImage()
            },
            handleImageLoad() {
                this.IDimageLoading = false
            }
        },

        watch: {
            // Change image ID
            image(newValue, oldValue) {
                this.$emit('image', this.id)
            }
        },
    })
</script>