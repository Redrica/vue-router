<script setup>

</script>

<template>
  <div id="nav">
<!--    компонент router-link автоматически добавляет класс router-link-active (меняется в настройках роутера) к той ссылке, которая соответствует текущей странице (роуту) -->
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </div>
</template>
