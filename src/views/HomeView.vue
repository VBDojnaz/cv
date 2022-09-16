<template>
  <h1 class="title">Hi! I'm Victor Bäck <span ref="wave">👋</span></h1>
  <p class="subtitle">{{ age }} years old</p>
  <p>I was born in Värnamo in 2002, and have lived here for my whole life</p>
</template>

<script>
export default {
  data() {
    return {
      born: 1036494000000, // 5th November 2002
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
  mounted() {
    twemoji.parse(this.$refs.wave);
  },
};
</script>

<style>
.emoji {
  height: 1em;
  position: relative;
  top: 0.1em;
}
</style>
