<template>
  <div>
    Misc!
      <div v-for="c in charts" :key=c.title>
        {{ c.source }}
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Misc',

    methods: {
      // https://api.flipsidecrypto.com/api/v2/queries/  <SOURCE>   /data/latest
    },

    data: () => ({
      charts: [
        { title: "m1", source: "aab55e78-2c41-4708-b7a8-ed576556418a" },
        { title: "m2", source: "aab55e78-2c41-4708-b7a8-ed576556418a" },
      ],
    }),
  }
</script>
