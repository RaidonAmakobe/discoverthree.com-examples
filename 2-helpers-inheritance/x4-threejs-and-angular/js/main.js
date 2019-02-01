function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 7.5 );

  initLights( app.scene );
  loadModels( app.scene );

  app.start();

}

init();
