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

  setupControls( meshes );

  app.scene.add(

    meshes.leftQuad,
    meshes.rightQuad,

  );

}

initScene();
