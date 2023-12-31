<template>
  <div id="map-container-1"
       class="page-wrap"></div>
</template>

<script setup>
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
import { Map, View } from 'ol'
import { fromLonLat } from 'ol/proj'

const map = ref(null)
function init () {
  map.value = new Map({
    target: 'map-container-1',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([0, 0]),
      zoom: 2
    })
  })
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => { })
</script>

<style lang='scss' scoped></style>
