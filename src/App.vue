<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarNavigasiVue from './components/Bar Navigasi.vue'
import FooterVue from "./components/Footer.vue"
</script>

<template>
  <BarNavigasi-Vue />
  <RouterView />
  <footer-vue />
</template>
