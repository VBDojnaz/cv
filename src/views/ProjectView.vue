<script setup>
import ProjectComponent from "../components/ProjectComponent.vue";
import LBSImg from "../assets/lbs.jpg";
import JUImg from "../assets/ju.png";
</script>

<template>
  <h1 class="title">Projects</h1>
  <ProjectComponent
    v-for="project in projects"
    :key="project.title"
    :title="project.title"
    :img="project.img"
    :sub="project.sub"
    :desc="project.desc"
    :repo="project.repo"
  />
</template>

<script>
export default {
  components: { ProjectComponent },
  data() {
    return {
      projects: [
        {
          title: "YTMVP2-Hackathon",
          sub: "A group assignment using git",
          desc: "This assignment was designed to introduce the concept of collaboration using git",
          repo: "https://github.com/VBDojnaz/YTMVP2-Hackathon",
        },
      ],
    };
  },
};
</script>
