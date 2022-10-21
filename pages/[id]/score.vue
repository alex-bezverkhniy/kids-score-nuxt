<script setup>
// const route = useRoute();
// const id = route.params.id;

const scope = useScope();
useTitle().value = "My Score";
</script>

<template>
  <NuxtLayout>
    <h1>{{ scope.id[0].toUpperCase() + scope.id.slice(1) }}' Score</h1>
    <h2>score: {{ scope.score.totalScore }}</h2>
  </NuxtLayout>
</template>
