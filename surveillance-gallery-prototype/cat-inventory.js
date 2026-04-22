import * as THREE from 'three';
import { catInventory } from './rayCastTest.js';
console.log("here!")
// SCENE
const scene = new THREE.Scene()
// CANVAS ELEMENT
const canvas = document.querySelector('canvas#three-gallery');
//TURN ON AXIS HELPER
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1)
scene.add(camera)
// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: 'high-performance'
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;

// LIGHTS
const ambientLight = new THREE.AmbientLight('#d2dfe8')
scene.add(ambientLight);

const hemilight = new THREE.HemisphereLight('#ffffbb', '#000020', 1);
// hemilight.color.setHSL(0.6, 1, 0.1);
// hemilight.groundColor.setHSL(0.1, 0.2, 0.1);
scene.add(hemilight);

const directionalLight = new THREE.DirectionalLight()
directionalLight.color = new THREE.Color(0xFFFFF)
scene.add(directionalLight)

// CANVAS 3D OBJECTS
// TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// Call draw Inventory
drawInventory();
// SET CAMERA POSTION
camera.position.z = 5;
let group = new THREE.Group();
function drawInventory() {
    for (let i = 0; i < catInventory.length; i++) {
        catInventory[i].position.x = 1.5 * i;
        group.add(catInventory[i]);
        scene.add(group);
    }
}

window.requestAnimationFrame(animate);
let elapsedTime = 0;
function animate(timer) {
    // Calculates timer different
    let deltaTime = timer - elapsedTime;
    // console.log(deltaTime)
    elapsedTime = timer;
    // Makes sure it has consistency across screens animations
    group.rotation.y += 0.01 * deltaTime
    renderer.render(scene, camera);


    window.requestAnimationFrame(animate)
}