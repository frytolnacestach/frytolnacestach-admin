<template>
    <main class="t-main">
        <div class="o-hero">
            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">
                        Přihlášení do administrace
                    </h1>
                </div>
            </div>
        </div>
        <LoginForm />
    </main>
</template>

<script>
    import LoginForm from '../components/LoginForm.vue'

    export default {
        name: 'LoginPage',

        components: {
            LoginForm,
        }
    }
</script>
