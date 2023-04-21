<template>
	<ComponentHeader />
	<slot />
	<ComponentFooter />
</template>

<script>
	export default defineComponent({
		name: 'DefaultLayout'
	})
</script>
