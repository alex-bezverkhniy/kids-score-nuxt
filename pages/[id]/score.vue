<script setup>
// const route = useRoute();
// const id = route.params.id;

const scopeData = useScope();
let scope = new ScopeData(scopeData.value)
const scoreKey = scope.getScoreKey()

useTitle().value = "My Score";
</script>

<template>
  <NuxtLayout>
    <h1>{{ scope.id[0].toUpperCase() + scope.id.slice(1) }}' Score - {{scoreKey}}</h1>
    <!-- <pre>{{scope.score}}</pre> -->
    <v-container fluid ma-0 pa-0>
      <v-row dense>
        <v-container>
          <v-row no-gutters>
            <v-col v-for="(card, i) in scope.score.data" :key="card.taskId" cols="12" sm="4" class="pa-2">
              <v-card max-width="344">

                <v-img :src="scope.tasks[i].img" class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                </v-img>

                <v-divider></v-divider>
                <v-card-text class="py-0">
                  <v-row align="center" hide-gutters no-gutters>
                    <v-col class="text-h2" cols="6">
                      {{card.points}}
                    </v-col>
                    <v-col cols="6" class="text-right">

                      <v-icon v-if="card.status != 'not started'" size="48" color="success" icon="mdi-check"></v-icon>
                      <v-icon v-if="card.status == 'not started'" size="48" color="error" icon="mdi-cancel"></v-icon>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-divider></v-divider>

                <v-card-title v-text="scope.tasks[i].title"></v-card-title>
                <v-card-subtitle v-text="scope.tasks[i].category"></v-card-subtitle>
                <v-card-text v-text="scope.tasks[i].desc"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>
