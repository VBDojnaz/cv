<template>
  <div class="card my-2">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="img" :alt="`The logo of ${school}`" />
          </figure>
        </div>
        <div class="media-content">
          <h1 class="title is-4">{{ school }}</h1>
          <p class="subtitle is-6">{{ sub }}</p>
        </div>
      </div>
      <p v-if="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    school: String,
    img: Object,
    sub: String,
    desc: String,
  },
};
</script>
