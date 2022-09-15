<script setup>
import { RouterLink, RouterView } from "vue-router";
import victor from "./assets/victor.jpg";
</script>

<template>
  <section class="section">
    <div class="hero-body">
      <h1 class="title">Victor Bäck</h1>
      <p class="subtitle">{{ age }} years old</p>
    </div>
    <div class="container is-flex is-justify-content-space-between">
      <div class="card m-3 is-flex-grow-1">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="victor" alt="Photo of Victor Bäck" />
          </figure>
        </div>
      </div>
      <div class="card m-3 p-3 is-flex-grow-2">
        <RouterView />
        <div class="tabs is-toggle is-toggle-rounded">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      born: 1036494000000, //5th November 2002
    };
  },
  computed: {
    age() {
      var today = new Date();
      var birthDate = new Date(this.born);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
};
</script>

<style scoped></style>
