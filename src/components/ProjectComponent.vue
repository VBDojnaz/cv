<template>
  <div class="card my-2">
    <div class="card-content">
      <div class="media">
        <div class="media-left" v-if="img">
          <figure class="image is-48x48">
            <img
              :src="img"
              :alt="`An image representing the project titled ${title}`"
            />
          </figure>
        </div>
        <div class="media-content">
          <h1 class="title is-4">{{ title }}</h1>
          <p class="subtitle is-6">{{ sub }}</p>
        </div>
      </div>
      <p v-if="desc">{{ desc }}</p>
      <a :href="repo">Repository</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: Object,
    sub: String,
    desc: String,
    repo: String,
  },
};
</script>
