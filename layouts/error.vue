<template>
  <main class="t-main -pt-menu">
      <section class="t-section">
          <oHero 
              :headline="headline"
              :perex="perex"
          />
      </section>

      <section class="t-section">
          <div class="o-build">
              <div class="o-build__outer">
                  <div class="o-build__inner">
                      <div class="o-build__text">
                          SEKCE SE PŘIPRAVUJE
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </main>
</template>

<script>
import oHero from '../components/organisms/oHero.vue'

export default defineComponent({
	name: 'ErrorLayout',
	layout: 'empty',

	//COMPONENTS
	components: {
		oHero
	},

	props: {
		error: {
			type: Object,
			default: null
		}
	},

	data() {
		return {
			headline: "Error 404",
			perex: "Je mi to líto ale tato stránka neexistuje"
		}
	},

	head () {
		const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
		
		return {
			title
		}
	}
})
</script>