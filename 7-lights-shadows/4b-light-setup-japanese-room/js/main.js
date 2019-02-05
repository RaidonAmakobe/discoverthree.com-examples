
function init() {

  const app = new THREE_APP( '#container' );

  app.init();


  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -10, 10, 10 );

  setupRenderer( app.renderer );

  initMeshes( app.scene );
  loadModels( app.scene );


  app.start();
}

init();