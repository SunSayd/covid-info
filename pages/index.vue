<template>
  <section class="container column">
    <v-card
      class="mx-auto"
      color="white"
      width="100%"
    >
    <Shields/>
    </v-card>
  <section class="container">
    <Tabs></Tabs>
    <Map></Map>
  </section>
    <Snackbar/>
  </section>
</template>

<script>
import Shields from "../components/Shields"
import Map  from "../components/Map";
import Snackbar from "../components/Snackbar"
import Tabs from "../components/Tabs"
export default {
  components: {
    Map,
    Snackbar,
    Tabs,
    Shields
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.column{
  flex-direction: column;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

