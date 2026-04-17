import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
let numOfCats = 10;
let catArr = [];
function random(min, max) {
    return min + Math.random() * (max - min)
}

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}

// CANVAS ELEMENT
const canvas = document.querySelector('canvas#three-ex');

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1)
scene.add(camera)

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    powerPreference: 'high-performance'
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
// CONTROLS
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2
controls.target.y = 2;

// LIGHTS
const ambientLight = new THREE.AmbientLight('#d2dfe8')
scene.add(ambientLight);

const hemilight = new THREE.HemisphereLight('#ffffbb', '#000020', 1);
// hemilight.color.setHSL(0.6, 1, 0.1);
// hemilight.groundColor.setHSL(0.1, 0.2, 0.1);
scene.add(hemilight);



const pointLight = new THREE.PointLight('#ffffff', 1, 100);
pointLight.position.set(0, 10, 5);
scene.add(pointLight);

// GROUND
const groundGeo = new THREE.PlaneGeometry(105, 105);
const groundMat = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
groundMat.color.setHSL(0.1, 1, 0.75);
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
scene.add(ground)
const gridHelper = new THREE.GridHelper(100, 20);
scene.add(gridHelper);

// CANVAS 3D OBJECTS
// TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();

// Create and render cat portrait
function addBox(imageUrl, angle) {

    const texture = textureLoader.load(imageUrl);
    // Cat material
    let material = new THREE.MeshLambertMaterial({ color: '#ffffff', map: texture })
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 0.2),
        material
    )
    // box.position.y = 2.5;
    box.position.setFromCylindricalCoords(numOfCats, angle, 2.5);
    box.lookAt(0, 2, 0)
    scene.add(box);
    // const lookAtPosition = new THREE.Vector3(0, 2, 0);
    // lookAtPosition.lerp(box.position, 0.3)
    // controls.target.copy(box.position)
}

// Generate 10 cat images
async function createImages() {
    for (let i = 0; i < numOfCats; i++) {
        let catImage = await fetchCat();
        let angle = (i / numOfCats) * (Math.PI * 2) - Math.PI * 2;
        addBox(catImage, angle);
    }
}
createImages();
async function fetchCat() {
    console.log("hello fetch II");
    try {
        // Url of cat gifs with an orange text that says hello
        let urlA = `https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&json=true`
        // Url of random cat images
        let urlB = `https://cataas.com/cat?json=true`
        //
        let response = await fetch(urlB) //response
        let cat = await response.json();
        console.log(cat)
        // displayOnSite(cat.url)
        return cat.url

    }
    catch (err) {
        console.log(err);
    }
}

// Forces objects to have updated positions to check the intersection positions cuz object positions havent updated till we render them
// box.updateMatrixWorld()

// Raycast
const raycaster = new THREE.Raycaster()


let currentIntersectedObj = null

window.requestAnimationFrame(animate);

// SET CAMERA POSTION
camera.position.z = 5;

// ANIMATION
function animate(timer) {
    controls.update();
    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
    // console.log(mouse);
});


