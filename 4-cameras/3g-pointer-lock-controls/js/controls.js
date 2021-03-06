import {
  PointerLockControls,
} from './vendor/three/controls/PointerLockControls.js';

function initOverlay( controls ) {

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.lock();

  } );

}

export default function createCameraControls( app ) {

  const controls = new PointerLockControls( app.camera, app.container );

  // note that these controls don't have an "update" function
  // so we don't need to add them as app.controls

  initOverlay( controls );

  // add the control's object to the scene (required)
  app.scene.add( controls.getObject() );

  // lock the pointer
  // controls.lock();

  // lock the pointer, be default when the "esc" key is pressed
  // controls.unlock();

  // the direction the camera is currently pointing in
  // controls.getDirection();

  // If we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // controls.dispose();

}
