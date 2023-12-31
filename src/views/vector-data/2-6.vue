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

import { Style, Fill, Stroke } from 'ol/style'
import { getArea } from 'ol/sphere'
import colormap from 'colormap'

const map = ref(null)
function init () {
  map.value = new Map({
    target: 'map-container-2-1',
    layers: [
      new VectorLayer({
        source: new VectorSource({
          format: new GeoJSON(),
          url: new URL('./world.zh.json', import.meta.url).href
        }),
        style: function (feature) {
          return new Style({
            fill: new Fill({
              color: getColor(feature)
            }),
            stroke: new Stroke({
              color: 'rgba(255,255,255,0.8)'
            })
          })
        }
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  })
  map.value.addInteraction(new Link())
}

const min = 1e8 // the smallest area
const max = 2e13 // the biggest area
const steps = 50
const ramp = colormap({
  colormap: 'blackbody',
  nshades: steps
})
function clamp (value, low, high) {
  return Math.max(low, Math.min(value, high))
}
function getColor (feature) {
  const area = getArea(feature.getGeometry())
  const f = Math.pow(clamp((area - min) / (max - min), 0, 1), 1 / 2)
  const index = Math.round(f * (steps - 1))
  return ramp[index]
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
