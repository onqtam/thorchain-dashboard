<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item-group v-model="model">
              <v-list-item
                v-for="n in dashboards"
                :key="n"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon left>{{ n.icon }}</v-icon>{{ n.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Main',

    data: () => ({
      model: 0,
      dashboards: [
        { name: 'network stats', icon: "mdi-lan" },
        { name: 'supply', icon: "mdi-barcode" },
        { name: 'user/address metrics', icon: "mdi-account-group" },
        { name: 'liquidity, fees & income', icon: "mdi-oil" },
        { name: 'miscellaneous', icon: "mdi-help-circle" },
      ],
    }),
  }
</script>
