import { OrbitControls } from '/addons/OrbitControls.js';
import * as TEST from '/javascript/test-scene.js';
import * as THREE from '/node_modules/three/build/three.module.js';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('canvas-container').appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set( 0, 20, 100 );
controls.update();

// Initialises scene
function init() {

}

function start() {
    TEST.CreateTestSolarSystemScene();
}

// This is the update loop for the scene
function animate() {
	requestAnimationFrame( animate );

    controls.update();

	renderer.render( scene, camera );
    console.log("This should be running.")
}

start();
animate();