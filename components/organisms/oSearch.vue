<template>
    <div class="o-search">
        <div class="o-search__outer">
            <div class="o-search__inner">
                <input class="a-input-search" type="text" v-model="searchQuery" placeholder="hledání..">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'OrganismsoSearchComponent',

        props: {
            type: {
                type: String,
                required: true
            },
            page: {
                type: Number,
                required: true
            },
            items: {
                type: Number,
                required: true
            }
        },

        setup(props) {
            const runTimeConfig = useRuntimeConfig()
            const searchQuery = ref('')
            const searchResult = ref([])

            const search = async () => {
                fetch(`${runTimeConfig.public.baseURL}/search-admin?type=${props.type}&search=${searchQuery.value}&page=${props.page}&items=${props.items}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => {
                    searchResult.value = data
                })
            }

            return {
                searchQuery,
                searchResult,
                search
            }
        },

        watch: {
            searchQuery: function(newSearchQuery, oldSearchQuery) {
                this.search()
                
                if (newSearchQuery.length === 0) {
                    this.searchResult = []
                }
            },
            searchResult: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('search-result', this.searchResult)
                }
            }
        }
    })
</script>