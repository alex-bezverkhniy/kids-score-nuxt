<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import { onUpdated } from "vue";

const id = "eva"; // TODO so far hardcoded. Need to be retrieved from session after login
const scope = useScope();

console.log("INIT data");

scope.value.id = id;

await useFetch(`/api/${id}/tasks`, {
  onRequest({ request, options }) { },
  onRequestError({ request, options, error }) { },
  onResponse({ request, response, options }) {
    scope.value.tasks = response._data.tasks;
  },
  onResponseError({ request, response, options }) {
    scope.value.error = response._data;
  },
});

await useFetch(`/api/${id}/score`, {
  onRequest({ request, options }) { },
  onRequestError({ request, options, error }) { },
  onResponse({ request, response, options }) {
    scope.value.score = response._data;
  },
  onResponseError({ request, response, options }) {
    scope.value.error = response._data;
  },
});

await useFetch(`/api/${id}/goals`, {
  onRequest({ request, options }) { },
  onRequestError({ request, options, error }) { },
  onResponse({ request, response, options }) {
    scope.value.goals = response._data;
  },
  onResponseError({ request, response, options }) {
    scope.value.error = response._data;
  },
});

onUpdated(() => { console.log('app updated') });

</script>


