
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  // setup the map controls. Our App will have skipped
  // setting up OrbitControls since we didn't load the script,
  // allowing us to set up a different controls manually
  app.controls = new THREE.MapControls( app.camera, app.container );



  setupRenderer( app.renderer );
  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );


  app.start();
}

init();
