import createApp from './app.js';

import createGeometries from './geometries.js';
import loadTextures from './textures.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupControls from './interactivity.js';

function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );

  const meshes = createMeshes( geometries, materials );

  setupControls( materials );

  app.scene.add(
    meshes.leftQuad,
    meshes.rightQuad,
  );

  console.log( 'Here\'s the non-ndexed BufferGeometry you just created: ', geometries.nonIndexed );
  console.log( '...and here\'s the indexed BufferGeometry you just created: ', geometries.indexed );

}

initScene();
