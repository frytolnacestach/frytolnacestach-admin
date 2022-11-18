<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Ohlášení
                    </h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name: 'LogoutPage',
        mounted() {
            localStorage.setItem("user-info","undefined")
            
            //delete cookies
            document.cookie = "FNCADMINemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            document.cookie = "FNCADMINpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"

            let user = localStorage.getItem('user-info')

            if (user && user != "undefined") {
                
            } else {
                this.$router.push('admin')
            }
        }
    }
</script>
