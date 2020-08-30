export default (): mapboxgl.Layer[] => [
  {
    id: 'osm_topo',
    type: 'raster',
    source: 'osm_topo',
    minzoom: 0,
  },
  {
    id: 'point',
    source: 'point',
    type: 'circle',
    paint: {
      'circle-color': '#ff0000',
    },
  },
];
