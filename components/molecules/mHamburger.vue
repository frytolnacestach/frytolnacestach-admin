<template>
    <span class="js_m-hamburger m-hamburger" data-hamburger="close">
        <span class="m-hamburger__texts">
            <span class="m-hamburger__text -open">Menu</span>
            <span class="m-hamburger__text -close">Zavřít</span>
        </span>
        <span class="m-hamburger__lines">
            <span class="m-hamburger__line -first"></span>
            <span class="m-hamburger__line -second"></span>
            <span class="m-hamburger__line -third"></span>
        </span>
    </span>
</template>

<script>
    export default defineComponent({
        name: 'MoleculesmHamburgerComponent',

        mounted() {
            this.mHamburger()
        },
        methods: {
            mHamburger() {
                const hamburger = document.querySelector(".js_m-hamburger")
                const navLinks = document.querySelectorAll(".js_m-nav-main__link")

                hamburger.addEventListener("click", function() {
                    let status = hamburger.getAttribute("data-hamburger")

                    if (status === "close") {
                        hamburger.setAttribute("data-hamburger", "open")
                        hamburger.classList.add("open")
                        document.querySelector(".js_m-nav-main").classList.add("open")
                        document.documentElement.classList.add("no-scroll")
                        document.body.classList.add("no-scroll")
                    } else {
                        hamburger.setAttribute("data-hamburger", "close")
                        hamburger.classList.remove("open")
                        document.querySelector(".js_m-nav-main").classList.remove("open")
                        document.documentElement.classList.remove("no-scroll")
                        document.body.classList.remove("no-scroll")
                    }
                })

                navLinks.forEach(function(link) {
                    link.addEventListener("click", function() {
                        hamburger.setAttribute("data-hamburger", "close")
                        hamburger.classList.remove("open")
                        document.querySelector(".js_m-nav-main").classList.remove("open")
                        document.documentElement.classList.remove("no-scroll")
                        document.body.classList.remove("no-scroll")
                    })
                })
            }
        }
    })
</script>