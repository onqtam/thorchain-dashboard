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
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item-group mandatory v-model="selected">
                  <v-list-item
                    v-for="n in dashboards"
                    :key="n.name"
                    link
                    @click="click(n.index)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        <!-- icons: https://materialdesignicons.com/ -->
                        <v-icon left>{{ n.icon }}</v-icon>{{ n.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
import router from './router'

export default {
  name: 'App',

  components: {
  },

  mounted () {
    this.getA().then((result) => {
      console.log(result)
    })
  },
  methods: {
    click(index) {
      if (this.selected !== index)
        router.push(this.dashboards[index].path)
    },
    getA :() =>{
        return Vue.axios.get(`https://api.flipsidecrypto.com/api/v2/queries/aab55e78-2c41-4708-b7a8-ed576556418a/data/latest`);
    },
  },
  data: () => ({
    selected: 0,
    dashboards: [
      {
        index: 0,
        name: 'Network Stats',
        path: "NetworkStats",
        icon: "mdi-lan",
      },
      {
        index: 1,
        name: 'Supply',
        path: "Supply",
        icon: "mdi-barcode",
      },
      {
        index: 2,
        name: 'Users/Addresses',
        path: "Users",
        icon: "mdi-account-group",
      },
      {
        index: 3,
        name: 'Liquidity, Fees, Income',
        path: "Liquidity",
        icon: "mdi-oil",
      },
      {
        index: 4,
        name: 'Miscellaneous',
        path: "Misc",
        icon: "mdi-help-circle",
      },
    ],
    // links: [
    //   'Dashboard',
    //   'Messages',
    //   'Profile',
    //   'Updates',
    // ],
  }),
};
</script>

<style>
</style>
