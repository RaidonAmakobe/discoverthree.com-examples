import {
  ShaderMaterial,
} from './vendor/three/three.module.js';

// a shader material requires two pieces of GLSL code to work
// 1. the vertex shader, that calculates the appearance at each vertex
// 2. the fragment shader, that uses the result of the vertex shader to
// calculate the appearance between vertices

// we'll use string templates to allow us to write multiline strings
// the strings are wrapped in the backtick character: `
//
// Also, note the /* glsl */ comment at the start - this means that
// you can set up some editor environments so that
// they will correctly highlight the shader code
const vertexShader = /* glsl */`

// define uniforms, if any

// define varyings, if any

// here we want to pass the built in UV attribute to the
// vertex
varying vec2 vUv;

// the main function - every vertex and fragment shader must have this
void main() {

  vUv = uv;

  // the eventual output of every vertex shader is gl_position
  // in this very basic example, we are multiplying the initial position with
  // the camera's view matrix and the modelViewMatrix, which is the object's position
  // relative to the camera

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

}
`;

const fragmentShader = /* glsl */`
// variables, if any

uniform sampler2D diffuseMap;

varying vec2 vUv;

void main() {

  // the final output of the vertex shader must be gl_FragColor, which is the color to set
  // the pixel to. Each value in the vector 4 is between 0 and 1
  gl_FragColor = texture2D( diffuseMap, vUv );

}
`;

function createShaderMaterial( colorMap ) {

  const uniforms = {
    diffuseMap: {
      value: colorMap,
    },
  };

  const material = new ShaderMaterial( {
    uniforms,
    vertexShader,
    fragmentShader,
  } );

  return material;

}

export default function createMaterials( textures ) {

  return {

    bamboo: createShaderMaterial( textures.bambooColor ),

  };

}
