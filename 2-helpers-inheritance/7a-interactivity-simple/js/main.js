function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );

  app.camera.position.set( 5, 5, 20 );

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  initLights( app.scene );

  const mesh = initMeshes( app.scene );
  const helper = createArrowHelper();

  mesh.add( helper )

  initControls( mesh );

  app.start();

}

init();