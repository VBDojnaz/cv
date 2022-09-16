<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="img" :alt="`The logo of ${lang}`" />
          </figure>
        </div>
        <div class="media-content">
          <h1 class="title is-4">{{ lang }}</h1>
          <star-rating :rating="score" :read-only="true" :increment="0.01" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: String,
    img: Object,
    score: Number,
  },
};
</script>
