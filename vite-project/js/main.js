import '../css/style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

//init
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(
	{canvas: document.querySelector('#bg'),}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0,10,20);
camera.lookAt(0,0,0);

//mesh loader

let logoModel;
const loader = new GLTFLoader();
loader.load("../models/logo.glb", function(gltf) {
	gltf.scene.position.y = -1;
	logoModel = gltf;
	scene.add(gltf.scene);
}, undefined, function (error){
	console.error(error);
})

//render
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);

//lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,10,10);
pointLight.intensity = 500;
const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.intensity = 1;

scene.add(pointLight, ambientLight);

//helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);
let goDown = false;
let control = 0.05;

let goLeft = false;
//loop

function updateSize() {

    if ( windowWidth != window.innerWidth || windowHeight != window.innerHeight ) {

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        renderer.setSize( windowWidth, windowHeight );

    }

}

function oscillate(state, transform, value, control, cap1, cap2)
{
	const initValue = value;
	let value1 = value;
	let value2 = value;
	if(state == false)
	{
		if(transform >= cap1)
		{
			value1 = initValue;
			state = true;
		}
		transform += value1;
		value1 -= control;
	}
	else if(state == true)
	{
		if(transform <= cap2)
		{
			value2 = initValue;
			state = false;
		}
		transform -= value2;
		value2 += control;
	}
	return { 
		first: transform,
		second: state
	};
}
function animate()
{
	updateSize();
	requestAnimationFrame(animate);
	//logoModel.scene.rotation.x += 0.001;
	const values = oscillate(goDown, logoModel.scene.position.y, 0.01, control, 2, -3);
	logoModel.scene.position.y = values.first;
	goDown = values.second;

	const values2 = oscillate(goLeft, logoModel.scene.rotation.y, 0.003, control, 1, -1)
	logoModel.scene.rotation.y = values2.first;
	goLeft = values2.second;
	controls.update();

	renderer.render(scene, camera);
}

animate();