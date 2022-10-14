<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand is-family-secondary">
      <nuxt-link to="/" class="navbar-item">
        <span class="icon-text has-text-primary">
          <span class="icon">
            <i
              class="fa-regular fa-gamepad fa-xl fa-flip"
              style="--fa-animation-duration: 3s"
            ></i>
          </span>
          <span> </span>
          <h1 class="is-size-4">Kids Score</h1>
        </span>
      </nuxt-link>
      <!-- @click handler goes here, make sure to scroll a bit to see it. -->
      <a
        :aria-expanded="isActive"
        :class="{ 'is-active': isActive }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        data-target="collapse"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div
      id="collapse"
      :class="{ 'is-active': isActive }"
      class="navbar-menu is-paddingless"
    >
      <nav class="navbar-start">
        <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Eva </a>
          <div class="navbar-dropdown">
            <nuxt-link to="/eva/tasks" class="navbar-item">Tasks</nuxt-link>
            <nuxt-link to="/eva/score" class="navbar-item">Score</nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      showNavbar: true,
    };
  },
};
</script>