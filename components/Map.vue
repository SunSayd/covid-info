<template>
    <div id="map-wrap" style="height: 100vh; width: 100%;">
      <client-only>
        <l-map :zoom="13" :center="[47.413220, -1.219482]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
        </l-map>
      </client-only>
    </div>
</template>
<script>
  export default {
    mounted() {

    }
  };
</script>
<style>
  #map{
    width:100%;
    height:100vh;
  }
</style>
