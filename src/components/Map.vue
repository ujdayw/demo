<template>
  <div class="map">
    <l-map
        :zoom="zoom"
        :center="center"
        @update:zoom="onZoomChange"
        @update:center="onCenterChange"
        @update:bounds="onBoundsChange">
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />
      <l-marker
          v-for="museum in museums"
          :lat-lng="museum.location"
          :icon="museumMarker">
        <l-popup>
          <p>{{museum.name}}</p>
          <p>{{museum.address}}</p>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 5,
      center: [40, -100],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      museums: []
    }
  },
  components: {
    LMap: () => import('vue2-leaflet/dist/components/LMap'),
    LTileLayer: () => import('vue2-leaflet/dist/components/LTileLayer'),
    LMarker: () => import('vue2-leaflet/dist/components/LMarker'),
    LPopup: () => import('vue2-leaflet/dist/components/LPopup')
  },
  mounted() {
    axios.get('/api/v1/museums/')
        .then(res => {
          this.museums = res.data
        })
  }
}
</script>