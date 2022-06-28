<script setup>
import { ref } from 'vue';
import sourceData from '../data.json';

const destinations = ref(sourceData.destinations);

</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>

    <div class="destinations">
<!--      таким образом мы можем задать ссылку на динамический маршрут: его имя + параметр, и отрисовывать уже не по какому-то названию, а по id-->
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params: {id: destination.id}}"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </router-link>
    </div>
  </div>
</template>

<style>

</style>
