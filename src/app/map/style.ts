import layers from './layers';
import sources from './sources';

export default (): mapboxgl.Style & { [key: string]: any } => ({
  version: 8,
  name: 'example',
  center: [37.618423, 55.751244],
  zoom: 8,
  bearing: 0,
  pitch: 0,
  sources: sources(),
  sprite: '',
  glyphs: './fonts/{fontstack}/{range}.pbf',
  layers: layers(),
  created: '2018-10-12T15:05:16.376Z',
  id: 'cjn658s3q0a132sk7fxowdokg',
  modified: '2018-10-29T09:33:36.434Z',
  owner: 'pochivalin-av',
  visibility: 'private',
  draft: false,
});
