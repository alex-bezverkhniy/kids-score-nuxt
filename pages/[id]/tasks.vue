<script setup>
const route = useRoute();

const id = route.params.id;
const { data } = await useAsyncData("home", () =>
  queryContent(`/${id}/tasks`).findOne()
);

const addScore = () => {
  console.log("addScore");

  axios({
    method: "post",
    url: "/api/test",
    data: JSON.stringify({ username: "some name", address: "some address" }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  return false;
};
</script>

<template>
  <NuxtLayout>
    <section class="section">
      <div class="container">
        <h1 class="title">
          {{ id[0].toUpperCase() + id.slice(1) }}' Tasks
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark is-large">score</span>
              <span class="tag is-primary is-large">{{ data.totalScore }}</span>
            </div>
          </div>
        </h1>

        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="task in data.tasks"
            :key="task.id"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img v-bind:src="task.img" alt="Placeholder image" />
                </figure>
              </div>

              <div class="card-content">
                <p class="title">{{ task.title }}</p>
                <p class="subtitle">{{ task.category }}</p>
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="~/assets/img/eva-princes-small.jpg" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Eva Bezverkhniy</p>
                    <p class="subtitle is-6">@eva</p>
                  </div>
                </div>

                <div class="content">
                  {{ task.desc }}
                </div>
              </div>

              <footer class="card-footer">
                <a class="card-footer-item" @click="addScore">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-ban"></i>
                    </span>
                    <span>+0</span>
                  </span>
                </a>
                <a href="#" class="card-footer-item">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-star fa-beat"></i>
                    </span>
                    <span>+5</span>
                  </span>
                </a>
                <a href="#" class="card-footer-item">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-star fa-beat fa-lg"></i>
                    </span>
                    <span>+10</span>
                  </span>
                </a>
                <a href="#" class="card-footer-item">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-star fa-beat fa-xl"></i>
                    </span>
                    <span>+15</span>
                  </span>
                </a>
              </footer>
            </div>
            <!-- card -->
          </div>
        </div>
        <!-- columns -->
      </div>
    </section>
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