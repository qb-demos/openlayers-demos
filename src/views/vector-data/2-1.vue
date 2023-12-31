<template>
  <div id="map-container-2-1"
       class="page-wrap"></div>
</template>

<script setup>
import { Map, View } from 'ol'
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Link from 'ol/interaction/Link'

const map = ref(null)
function init () {
  map.value = new Map({
    target: 'map-container-2-1',
    layers: [
      new VectorLayer({
        source: new VectorSource({
          format: new GeoJSON(),
          url: new URL('./world.zh.json', import.meta.url).href
        })
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
  map.value.addInteraction(new Link())
}

onMounted(() => {
  init()
})
onBeforeUnmount(() => { })
</script>

<style lang='scss' scoped>
.page-wrap {
  background-color: #04041b;
}
</style>
