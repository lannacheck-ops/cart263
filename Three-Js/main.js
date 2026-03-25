// library ref: because we are loading a module
// "*" stands for everything
import * as THREE from 'three';

//SCENE
// stores it in scene variable
const scene = new THREE.Scene() // object that is part of the three.js library

//A: the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1) // parameters are width, height and depth(respectively) these are world coordinates, not pixels so you have to assign the units
//B: the material (applies color or texture to the geometry aka the shape)
const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
//C: put together. Mesh = geometry and material combined
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh);

// Set scene size
const sizes = {
    width: 800,
    height: 600
}
//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // 75 is the field of view(FOV) in degrees,
scene.add(camera)
//move camera
camera.position.z = 3 // move out on the z axis

//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

//render:
renderer.render(scene, camera)
