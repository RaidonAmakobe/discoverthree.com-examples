import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xcccccc, 0x555555, 0.75 );

}

function createDirectionalLight() {

  const direct = new DirectionalLight(
    0xffffff, // color
    15, // intensity,
  );

  direct.position.set( -12, 10, 12 );

  direct.castShadow = true;
  direct.shadow.mapSize.width = 1024;
  direct.shadow.mapSize.height = 1024;
  direct.shadow.camera.near = 5;
  direct.shadow.camera.far = 35;

  direct.shadow.camera.top = 10;
  direct.shadow.camera.right = 18;
  direct.shadow.camera.bottom = -8;
  direct.shadow.camera.left = -18;

  // direct.shadow.radius = 1.5;

  return direct;

}

export default function createLights() {

  return {

    ambient: createHemisphereLight(),
    main: createDirectionalLight(),

  };

}
