<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggle()"></v-app-bar-nav-icon>
      <v-toolbar-title>Kid's Score - {{ title }}</v-toolbar-title>
      <v-btn icon link href="/eva/score">
        <v-avatar color="info" size="large"> 64 </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="/assets/img/eva-princes-small.jpg"
          title="Eva"
          subtitle="eva@gmailcom"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="My Tasks"
          value="task"
          href="/eva/tasks"
          link
        >
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-star"
          title="My Score"
          value="starred"
          href="/eva/score"
          link
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item
        two-line
        prepend-avatar="assets/img/eva-princes-small.jpg"
        title="Eva"
        subtitle="Logged in"
      >
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-content>My Files</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script setup lang="ts">
const title = useTitle();
const drawer = ref(false);
const toggle = () => (drawer.value = !drawer.value);
</script>
