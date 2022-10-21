<script setup lang="ts">
// import * as moment from 'moment';

const route = useRoute();
useTitle().value = "My Tasks";
let addScoreResp = {};

const id = route.params.id;
const scopeData = useScope();
let scope = new ScopeData(scopeData.value)
const scoreKey = scope.getScoreKey()


const addScore = (points: number, taskId: number) => {
  console.log(`addScore: ${points}`);
  scope.updateScore(scoreKey, taskId, points)
  return false;
};
</script>

<template>
  <NuxtLayout>
    <h1>{{ id[0].toUpperCase() + id.slice(1) }}' Tasks</h1>
    <pre>{{ scoreKey }}</pre>
    <v-container fluid ma-0 pa-0>
      <v-row dense>
        <v-container>
          <v-row no-gutters>
            <v-col v-for="task in scope.tasks" :key="task.id" cols="12" sm="4" class="pa-2">
              <v-card max-width="344">
                <v-img :src="task.img" class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                </v-img>
                <v-card-title v-text="task.title"></v-card-title>
                <!-- <v-card-subtitle v-text="task.id"></v-card-subtitle> -->
                <v-card-subtitle v-text="task.category"></v-card-subtitle>
                <v-card-text v-text="task.desc"></v-card-text>
                <v-card-actions v-if="!scope.checkTaskIsComplete(scoreKey, task.id)">
                  <v-spacer></v-spacer>
                  <v-btn color="success" tile @click="addScore(0, task.id)">
                    <v-icon>mdi-cancel</v-icon>
                    0
                  </v-btn>
                  <v-btn color="success" tile @click="addScore(5, task.id)">
                    <v-icon>mdi-star-face</v-icon>
                    +5
                  </v-btn>

                  <v-btn color="success" tile @click="addScore(10, task.id)">
                    <v-icon>mdi-star-face</v-icon>+10
                  </v-btn>

                  <v-btn color="success" tile @click="addScore(15, task.id)">
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
