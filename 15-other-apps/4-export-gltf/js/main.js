import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

import setupExport from './export.js';

function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const clips = setupAnimation( meshes );

  setupExport( meshes, clips );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.shapes,

  );

}

initScene();
