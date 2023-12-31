<template>
  <div id="map-container-2-4"
       class="page-wrap"></div>
</template>

<script setup>
import { Map, View } from 'ol'
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

import DragAndDrop from 'ol/interaction/DragAndDrop'
import Modify from 'ol/interaction/Modify'
import Draw from 'ol/interaction/Draw'

const map = ref(null)
const source = new VectorSource()
function init () {
  map.value = new Map({
    target: 'map-container-2-4',
    layers: [
      new VectorLayer({
        source
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
  // 创建拖拽交互
  map.value.addInteraction(
    new DragAndDrop({
      source,
      formatConstructors: [GeoJSON]
    })
  )
  map.value.addInteraction(
    new Modify({
      source
    })
  )
  map.value.addInteraction(
    new Draw({
      type: 'Polygon',
      source
    })
  )
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
