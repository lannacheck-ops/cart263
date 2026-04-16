import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}

const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
const controls = new OrbitControls(camera, canvas)
// A mesh is the shape(geometry) plus the material (color, material etc)
const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)


scene.add(box)
// Forces objects to have updated positions to check the intersection positions cuz object positions havent updated till we render them
box.updateMatrixWorld()

// Raycast
const raycaster = new THREE.Raycaster()


let currentIntersectedObj = null

window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();
    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
    // console.log(mouse);
});


