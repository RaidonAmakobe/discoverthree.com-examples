import createApp from './app.js';

import setupRenderTarget from './renderTarget.js';

import createLights from './lights.js';
import createMaterials from './materials.js';
import createGeometries from './geometries.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = createApp();
  app.start();

  const RT = setupRenderTarget( app );

  const lights = createLights();

  const materials = createMaterials( RT.target );
  const geometries = createGeometries();
  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

  );

  RT.scene.add(

    // remember that due to the way the Scene Graph
    // works, adding things to a second scene will remove them
    // from the first. So we need to clone the lights to add
    // them to both scenes
    lights.ambient.clone(),
    lights.main.clone(),

    meshes.torusKnot,

  );

}

initScene();
