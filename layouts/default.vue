<template>
    <v-app>
  
      <MenuMain />
      <LogotypeHeader />
      <ControlHamburger />
  
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
  
      <ComponentFooter />
      
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout'
  }
  </script>
  