<script setup>
import { RouterLink, RouterView } from "vue-router";
import victor from "./assets/victor.jpg";
</script>

<template>
  <section class="section">
    <div class="hero-body">
    </div>
    <div class="container is-flex is-justify-content-space-between">
      <div
        class="card m-3 is-flex-grow-1 is-flex-shrink-0 is-flex-basis-0"
        :style="{
          height: 'fit-content',
        }"
      >
        <div class="card-image">
          <figure class="image is-1by1">
            <img :src="victor" alt="Photo of Victor Bäck" />
          </figure>
        </div>
      </div>
      <div
        class="card m-3 p-0 is-flex-grow-3 is-flex-shrink-0 is-flex-basis-0 is-flex is-flex-direction-column"
      >
        <div class="p-3 is-flex-grow-1"><RouterView /></div>

        <div class="tabs is-toggle is-fullwidth">
          <ul>
            <RouterLink
              to="/"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li :class="isExactActive ? 'is-active' : ''">
                <a :href="href" @click="navigate"> <span> About me </span> </a>
              </li>
            </RouterLink>
            <RouterLink
              to="/experience"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li :class="isExactActive ? 'is-active' : ''">
                <a :href="href" @click="navigate">
                  <span> Experience </span>
                </a>
              </li>
            </RouterLink>
            <RouterLink
              to="/education"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li :class="isExactActive ? 'is-active' : ''">
                <a :href="href" @click="navigate"> <span> Education </span> </a>
              </li>
            </RouterLink>
            <RouterLink
              to="/projects"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li :class="isExactActive ? 'is-active' : ''">
                <a :href="href" @click="navigate"> <span> Projects </span> </a>
              </li>
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.is-flex-basis-0 {
  flex-basis: 0;
}
</style>
