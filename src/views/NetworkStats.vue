<template>
  <div>
    NetworkStats!
    <div v-for="c in charts" :key=c.title>
      <br />
      <div v-if="c.fetched === undefined">
        undefined
        {{ c.source }}

        <v-skeleton-loader
          class="mx-auto"
          type="card"
        ></v-skeleton-loader>
      </div>
      <div v-else>
        <h1>{{c.title}}</h1>
        <Metric :title=c.title :chartdata=c.fetched />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import Metric from '../components/Metric.vue'

function delay(t, v) {
   return new Promise(function(resolve) { 
       setTimeout(resolve.bind(null, v), t)
   });
}

Promise.prototype.delay = function(t) {
    return this.then(function(v) {
        return delay(t, v);
    });
}

export default {
  name: 'NetworkStats',
  components: { Metric, },

  created() {
    this.charts.forEach(c => {
      Vue.axios.get(`https://api.flipsidecrypto.com/api/v2/queries/${c.source}/data/latest`).then((result) => {
        // TODO: remove artificial delay
        Promise.resolve().delay(1000).then(() => {
          // console.log(result);
          c.fetched = result.data.reverse();
        });
      })
    })
  },

  methods: {
    // https://api.flipsidecrypto.com/api/v2/queries/  <SOURCE>   /data/latest
  },

  data: () => ({
    charts: [
      {
        title: "$RUNE upgraded to native",
        source: "aab55e78-2c41-4708-b7a8-ed576556418a",
        fetched: undefined
      },
      {
        title: "something something LP returns something",
        source: "d33d1637-f7c1-4fd1-8bbe-691bfcc334ee",
        fetched: undefined
      },
    ],
  }),
}
</script>
