<template>
    <NuxtLayout name="admin">
        <main class="t-main">
            <!-- SECTION - HERO -->
            <oHero headline="Administrace - Uživatelé" />
            <!-- SECTION - HERO END -->

            <!-- SECTION - BREADCRUMBS Admin -->
                <mNavBreadcrumbs :links="mNavBreadcrumbsArray"/>
            <!-- SECTION - BREADCRUMBS END -->

            <section class="t-section mt-4 mb-8">
                <div class="t-section__inner">
                    <div class="o-admin-list">
                        <div class="o-admin-list__outer">
                            <div class="o-admin-list__inner">
                                <div class="o-admin-list__items">
                                    <div v-for="user  in users" :key="user.id" class="o-admin-list__item">
                                        <h3 class="o-admin-list__title">
                                            {{ user.nickname}}
                                        </h3>
                                        <p class="o-admin-list__perex">
                                            ID: {{ user.id }}<br>
                                            Status: {{ user.status }}<br>
                                            Jméno: {{ user.surname }}<br>
                                            Příjmení: {{ user.lastname }}<br>
                                            Email: {{ user.email }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </NuxtLayout>
</template>

<script lang="ts">
    import oHero from '@/components/organisms/oHero.vue'
    import mNavAdmin from '@/components/molecules/mNavAdmin.vue'
    import mNavBreadcrumbs from '@/components/molecules/mNavBreadcrumbs.vue'

    //INTERFACES
    interface Users {
        id: number
        nickname: string
        surname: string
        lastname: string
        status: number
        email: string
    }

    export default defineComponent({
        name: 'AdminUsersIndexPage',

        //COMPONENTS
        components: {
            mNavBreadcrumbs,
            oHero
        },

        data() {
            return {
                mNavBreadcrumbsArray: [
                    {
                        id: 1,
                        name: "Administrace",
                        url: "/admin/",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Uživatelé",
                        url: "",
                        status: "span"
                    }
                ]
            }
        },

        setup() {
            //LAYOUT
            definePageMeta({
                layout: 'admin'
            })

            //META HEAD
            useHead({
                title: 'Uživatelé - výpis',
                meta: [
                    { name: 'description', content: 'Úžasná administrace pro web.' }
                ],
                script: [ { innerHTML: 'console.log(\'Tebe zajímá můj jalový kód? No já se v Nuxt teprve učím a do toho jsem udělal migraci na NUXT3\')' } ]
            })

            //META SEO
            useServerSeoMeta({
                title: 'Uživatelé - výpis',
                ogTitle: 'Uživatelé - výpis',
                description: 'Úžasná administrace pro web.',
                ogDescription: 'Úžasná administrace pro web.',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                twitterCard: 'summary_large_image',
            })

            //CONSTS
            const runTimeConfig = useRuntimeConfig();
            const users = ref<Users[]>([])

            //API - Video
            onMounted(() => {
                fetch(`${runTimeConfig.public.baseURL}/users-all`, {
                    method: 'GET'
                }).then(res => res.json()).then(data => users.value = data);
            })

            //RETURN
            return { users }
        },

        mounted() {
            //Kontrola přihlášení
            let user = localStorage.getItem('user-info')
            if ( user && user != "undefined" ) {
                console.log("Jsi přihlášen")
            } else {
                //Přesměrování
                const router = useRouter()
                router.push('/login')
            }
        }
    })
</script>
