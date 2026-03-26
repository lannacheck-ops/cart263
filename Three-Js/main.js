// library ref: because we are loading a module
// "*" stands for everything
import * as THREE from 'three';

//SCENE
// stores it in scene variable
const scene = new THREE.Scene() // object that is part of the three.js library
const loader = new THREE.TextureLoader();

const water_texture = await loader.loadAsync('textures/Ice002_1K-JPG_Color.jpg');
//need to ensure that the textures are encoded correctly - mapping the colors correctly. makes sure it is color space of three.js
water_texture.colorSpace = THREE.SRGBColorSpace;
//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

//A: the geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1) // parameters are width, height and depth(respectively) these are world coordinates, not pixels so you have to assign the units
//B: the material (applies color or texture to the geometry aka the shape)
// const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
// //C: put together. Mesh = geometry and material combined
// const mesh = new THREE.Mesh(geometry, material)
// // Scale the first mesh
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

// // Rotate the first mesh
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// // Add the firdt mesh to the scene
// scene.add(mesh);
// const mesh_2 = new THREE.Mesh(geometry, material)
// scene.add(mesh_2)
// mesh_2.position.x = 1.5
// mesh_2.position.y = 1.25
// mesh_2.position.z = -1 // 0,0 is in the center left is negative right is positive

// const material = new THREE.MeshBasicMaterial({ map: water_texture });
// material.color = new THREE.Color('#ad86dd');
// // material.wireframe = true;
// material.transparent = true
// material.opacity = 0.5

// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     material
// )
// sphere.position.x = - 1.5

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// )

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// )
// torus.position.x = 1.5

// scene.add(sphere, plane, torus) //added multiple objects to the scene

// const group = new THREE.Group()
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// )
// cube1.position.x = 1.5
// group.add(cube1)
// /*https://threejs.org/docs/#SphereGeometry*/
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(.75, 32, 16),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
// )
// sphere.position.y = 1.5
// sphere.position.x = 3
// group.add(sphere)
// // Shift position of the group
// group.position.x = -2
// group.rotation.x = Math.PI * .25
// group.scale.set(.5, .5, .5)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
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
// // Rotate the camera at the mesh 2 target position
// camera.lookAt(mesh_2.position);
//render:
// renderer.render(scene, camera)
window.requestAnimationFrame(animate)

let elapsedTime = 0;
function animate(timer) {
    // Calculates timer different
    let deltaTime = timer - elapsedTime;
    // console.log(deltaTime)
    elapsedTime = timer;
    // Makes sure it has consistency across screens animations
    mesh.rotation.y += 0.01 * deltaTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
    mesh.position.x = Math.cos(elapsedTime / 1000)
    mesh.position.y = Math.sin(elapsedTime / 1000)
    // can also animate the camera

}