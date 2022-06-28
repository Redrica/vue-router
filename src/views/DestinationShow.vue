<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import sourceData from '../data.json';

const route = useRoute();
const destinationId = computed(() => parseInt(route.params.id));
const destination = computed(() => sourceData.destinations.find((item) => item.id === destinationId.value));

</script>

<template>
  <h1>{{ destination.name }}</h1>

  <div class="destination-details">
    <img :src="`/images/${destination.image}`" :alt="destination.name">
    <p>{{ destination.description }}</p>
  </div>

</template>


