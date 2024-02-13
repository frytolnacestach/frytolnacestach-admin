<template>
    <div class="o-pagination">
        <div class="o-pagination__outer">
            <div class="o-pagination__inner">
                <ul class="o-pagination__items">
                    <li :class="'o-pagination__item' + (selectPage === page ? ' -active' : '')" v-for="page in numberOfPages" :key="page" @click="changePage(page)">
                        {{ page }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'OrganismsoPaginationComponent',

        props: {
            type: {
                type: String,
                required: true
            },
            page: {
                type: Number,
                required: true
            },
            itemsPerPage: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                numberOfPages: 1,
                selectPage: 1
            }
        },

        methods: {
            createPagination () {
                if (this.itemsPerPage < this.countResult) {
                    this.numberOfPages = Math.ceil(this.countResult/this.itemsPerPage)
                } else {
                    this.numberOfPages = 1
                }
            },
            changePage(page) {
                this.selectPage = page;
                this.$emit('select-page', this.selectPage);
            }
        },

        setup(props) {
            const runTimeConfig = useRuntimeConfig()
            const countResult = ref([])

            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/config-number-items?type=${props.type}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    console.log("DATA:")
                    console.log(data)
                    countResult.value = data.count
                })
            })

            return {
                countResult
            }
        },

        watch: {
            countResult: {
                deep: true,
                handler(newValue, oldValue) {
                    this.createPagination()
                }
            }
        }
    })
</script>