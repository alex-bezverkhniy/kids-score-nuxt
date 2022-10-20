<script setup>
const route = useRoute();

const id = route.params.id;

const { data: taskData } = await useFetch(`/api/${id}/tasks`);
const scope = useScope();
</script>

<template>
  <NuxtLayout>
    <h1>{{ id[0].toUpperCase() + id.slice(1) }}' Score</h1>
    score: {{ scope.score.totalScore }}
  </NuxtLayout>
</template>
