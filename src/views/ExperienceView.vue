<script setup>
import ExperienceComponent from "../components/ExperienceComponent.vue";
import VMOImg from "../assets/vmo.jfif";
</script>

<template>
  <h1 class="title">Work experience</h1>
  <ExperienceComponent
    v-for="experience in exp"
    :key="experience.company"
    :company="experience.company"
    :img="experience.img"
    :sub="experience.sub"
    :desc="experience.desc"
  />
</template>

<script>
export default {
  components: { ExperienceComponent },
  data() {
    return {
      exp: [
        {
          company: "SÄBO Luddö B",
          sub: 'Care assistant (June 2022 - Current)',
          desc: "Luddö is a special accommodation which I work at as a care assistant.",
          img: VMOImg,
        },
      ],
    };
  },
};
</script>
