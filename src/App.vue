<script setup>
</script>

<template>
<!--  при текущей структуре это будет на всех страницах -->
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </div>

<!--  ↓ отрисует компонент, соответсвующий заданному path, т.е. индивидуальные страницы -->
  <div class="container">
    <router-view />
  </div>
</template>

<style>

</style>
