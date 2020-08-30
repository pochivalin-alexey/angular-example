export default (): mapboxgl.Sources => ({
  osm_topo: {
    type: 'raster',
    tiles: [
      'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
    ],
    tileSize: 256,
  },
  point: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [],
    },
  },
});
