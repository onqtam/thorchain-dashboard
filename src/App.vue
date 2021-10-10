<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-img
          alt="THORChain dashboard Logo"
          class="shrink mr-2"
          contain
          src="favicon.ico"
          transition="scale-transition"
          width="60"
        />
        THORChain dashboard
        <!-- 
        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        -->
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';
import Vue from 'vue'

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
    // links: [
    //     'Dashboard',
    //     'Messages',
    //     'Profile',
    //     'Updates',
    //   ],
  }),

  mounted () {
    this.getA().then((result) => {
      console.log(result)
    })
  },
  methods: {
    getA :() =>{
        console.log('test')
        return Vue.axios.get(`https://api.flipsidecrypto.com/api/v2/queries/aab55e78-2c41-4708-b7a8-ed576556418a/data/latest`);
    }
  }
};
</script>

<style>
</style>
