<template>
	<MenuMain />
	<LogotypeHeader />
	<ControlHamburger />

	<slot />

	<ComponentFooter />
</template>

<script>
	export default defineComponent({
		name: 'AdminLayout'
	})
</script>
