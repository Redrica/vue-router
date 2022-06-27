<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
<!--  при текущей структуре это будет на всех страницах -->
  <Navigation />

<!--  ↓ отрисует компонент, соответсвующий заданному path, т.е. индивидуальные страницы -->
  <div class="container">
    <router-view />
  </div>
</template>

<style>

</style>
