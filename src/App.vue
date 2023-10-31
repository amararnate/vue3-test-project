<script setup lang="ts">
import appFooter from '../src/components/appFooter.vue';
import appHeader from '../src/components/appHeader.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <app-header />

  <RouterView />

 <app-footer />
</template>

<style lang="scss">
  @import "../src/assets/scss/global.scss";
</style>