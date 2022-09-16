<script setup>
import EducationComponent from "../components/EducationComponent.vue";
import LBSImg from "../assets/lbs.jpg";
import JUImg from "../assets/ju.png";
</script>

<template>
  <h1 class="title">Education</h1>
  <EducationComponent
    v-for="experience in exp"
    :key="experience.school"
    :school="experience.school"
    :img="experience.img"
    :sub="experience.sub"
    :desc="experience.desc"
  />
</template>

<script>
export default {
  components: { EducationComponent },
  data() {
    return {
      exp: [
        {
          school: "Jönköping University",
          sub: 'Web Development .NET (2022 - Current)',
          desc: "",
          img: JUImg,
        },
        {
          school: "LBS Jönköping",
          sub: 'System Developer (2018 - 2021)',
          desc: "",
          img: LBSImg,
        },
      ],
    };
  },
};
</script>
