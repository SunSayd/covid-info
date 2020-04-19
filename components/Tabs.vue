<template>

    <v-card class="tabs">
      <v-tabs
        v-model="tab"
        icons-and-text
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          <v-icon>
            {{item.icon}}
          </v-icon>
        </v-tab>
      </v-tabs>
      <v-card>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card flat>
            <component :is="item.component"/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      </v-card>
    </v-card>

</template>
<script>
  import Table from "../components/Table";
  import Map from "./Map";
  import Snackbar from "./Snackbar";
  export default {

    components: {
        Table,
    },
  data () {
    return {
      tab: null,
      items: [
        { icon: 'mdi-table-large',component:'Table'},
        { icon: 'mdi-chart-arc'},
        { icon: 'mdi-chart-line'},
      ],
    }
  }
  }
</script>
<style lang="scss">
  .tabs{
    margin-right: 20px;
  }
</style>
