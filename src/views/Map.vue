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
import axios from 'axios';
export default {
  data() {
    return {
      zoom: 5,
      center: [40, -100],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      museums: [],
      museumMarker: L.icon({
        iconUrl: require('@/assets/img/pin.svg'),
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      })
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  mounted() {
    axios.get('/api/v1/museums/')
        .then(res => {
          this.museums = res.data
        })
  }
}
</script>