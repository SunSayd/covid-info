<template>

    <div class="container d-flex align-center justify-space-around " style="min-height: 50px">
<v-tooltip  v-for="item in items"
             :key="item.tooltip" bottom>
      <template v-slot:activator="{ on }">
        <div class="d-flex">
           <v-icon color="primary" dark v-on="on">{{item.icon}}</v-icon>
         <div>{{item.count}}</div>
        </div>
        </template>
        <span>{{item.text}}</span>

</v-tooltip>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        tooltip: null,
        items: [
          { icon: 'mdi-table-large',text:'Текст',count: this.$store.state.total.deaths},
          { icon: 'mdi-table-large',text:'Текст',count:this.$store.state.total.cases},
          { icon: 'mdi-table-large',text:'Текст',count:this.$store.state.total.recovered},
        ],
      }
    },
  }
</script>
