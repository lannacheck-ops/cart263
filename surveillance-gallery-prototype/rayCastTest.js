import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

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

const directionalLight = new THREE.DirectionalLight()
directionalLight.color = new THREE.Color(0xFFFFF)
scene.add(directionalLight)

const pointLight = new THREE.PointLight('#ffffff', 1, 100);
pointLight.position.set(0, 10, 5);
pointLight.distance = .75;
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

// CAT PORTRAIT CODE
let numOfCats = 10;
let catArr = [];
let eyeArr = [];
// Create and render cat portrait
function addBox(imageUrl, angle) {
    const group = new THREE.Group();

    const texture = textureLoader.load(imageUrl);
    // Cat material
    let material = new THREE.MeshLambertMaterial({ color: '#ffffff', map: texture })
    const box = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 0.2),
        material
    )
    // position the whole group
    group.position.setFromCylindricalCoords(random(numOfCats, numOfCats + 3), angle, 2.5);
    group.lookAt(0, 2, 0);
    // add box to group
    group.add(box);

    // EYE
    // clone the eye 
    // Eye wrapper 
    const eyePivot = new THREE.Object3D();
    const eye = eyeModel.clone();

    // Scale eye
    eye.scale.set(0.4, 0.4, 0.4);
    // fix orientation ONCE
    eye.rotation.y = -Math.PI; // tweak this (try +/- Math.PI/2 too) 
    // Add eye to eye wrapper 
    eyePivot.add(eye);
    // position eye on top of box
    eyePivot.position.y = 2.5

    // Add eye pivot to group
    group.add(eyePivot);
    catArr.push(box);
    eyeArr.push(eyePivot);
    scene.add(group);

}

// Create Cat images 
async function createImages() {
    for (let i = 0; i < numOfCats; i++) {
        let catImage = await fetchCat();
        let angle = (i / numOfCats) * (Math.PI * 2) - Math.PI * 2;
        addBox(catImage, angle);
    }
}
let eyeModel;
// Load eye model and call for cat images
async function init() {
    eyeModel = await loadModels(); // load once
    createImages(); // then create boxes
}

init();

// Load models
async function loadModels() {
    const gltLoader = new GLTFLoader();
    try {
        const gltfEye = await gltLoader.loadAsync('models/mecanic_eye/scene.gltf');
        const eyeModel = gltfEye.scene.children[0];
        console.log(eyeModel)
        return eyeModel;
    }
    catch (error) {
        console.log(error.message)
    }
}

// createImages();
// Fetch cat API
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






window.requestAnimationFrame(animate);

// SET CAMERA POSTION
camera.position.z = 5;
// RAYCAST
const raycaster = new THREE.Raycaster();
let currentIntersectedObj = null

// ANIMATION
function animate(timer) {
    controls.update();
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    renderer.render(scene, camera);
    // Check ray cast 
    const intersects = raycaster.intersectObjects(catArr);
    if (intersects.length > 0) {
        const hit = intersects[0].object;

        // If we are looking at a NEW object
        if (currentIntersectedObj !== hit) {

            // reset previous one
            if (currentIntersectedObj) {
                currentIntersectedObj.material.color.set('#ffffff');
            }

            // set new one
            currentIntersectedObj = hit;
            currentIntersectedObj.material.color.set('red');
        }

    } else {
        // not looking at anything → reset last one
        if (currentIntersectedObj) {
            currentIntersectedObj.material.color.set('#ffffff');
        }

        currentIntersectedObj = null;
    }
    // EYES LOOK AT CAMERA POSITION
    eyeArr.forEach(eye => {
        eye.lookAt(camera.position);
    });

    window.requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const mouse = new THREE.Vector2();

// Mouse move check
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
    // console.log(mouse);
});
