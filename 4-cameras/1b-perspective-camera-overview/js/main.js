function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  app.scene.background = new THREE.Color( 0x23485c );

  app.controls.target.y = 1;

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( ...meshes.spheresArray );

  initCamera( app );

  app.start();

}

initScene();
