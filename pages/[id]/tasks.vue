<script setup lang="ts">
const route = useRoute();
let addScoreResp = {};

const id = route.params.id;
const { data: taskData } = await useFetch(`/api/${id}/tasks`);
// const { data } = await useAsyncData("home", () =>
//   queryContent(`/${id}/tasks`).findOne()
// );



const addScore = async (points: number, taskId: number) => {
  console.log(`addScore: ${points}`);
  addScoreResp = await useFetch(`/api/${id}/add/${taskId}`, {
    method: 'put',
    body: { points }
  })
  return false;
};
</script>

<template>
  <NuxtLayout>
    <h1>{{ id[0].toUpperCase() + id.slice(1) }}' Tasks</h1>
    <p>addScoreResp: {{ addScoreResp }}</p>

    <v-container fluid ma-0 pa-0>
      <v-row dense>

        <v-container>
          <v-row no-gutters>
            <v-col v-for="card in taskData.tasks" :key="card.id" cols="12" sm="4" class="pa-2">
              <v-card max-width="344">
                <v-img :src="card.img" class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                </v-img>
                <v-card-title v-text="card.title"></v-card-title>
                <v-card-subtitle v-text="card.category"></v-card-subtitle>
                <v-card-text v-text="card.desc"></v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="success" tile @click="addScore(5, card.id)">
                    <v-icon>mdi-star-face</v-icon>
                    +5
                  </v-btn>

                  <v-btn color="success" tile>
                    <v-icon>mdi-star-face</v-icon>+10
                  </v-btn>

                  <v-btn color="success" tile>
                    <v-icon>mdi-star-face</v-icon>+15
                  </v-btn>

                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>

  </NuxtLayout>
</template>


<style scoped>
.card {
  min-width: 300px;
  max-width: 400px;
}

.column {
  min-width: 320px;
  max-width: 400px;
}

.icon-text {
  font-size: 0.8rem;
}
</style>