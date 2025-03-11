
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let canvas, renderer;
const projectAmount = 3;
const scenes = [];

init();

function init() {

    canvas = document.getElementById( 'c' );

    const geometries = [
        new THREE.BoxGeometry( 1, 1, 1 ),
        new THREE.SphereGeometry( 0.5, 12, 8 ),
        new THREE.DodecahedronGeometry( 0.5 ),
        new THREE.CylinderGeometry( 0.5, 0.5, 1, 12 )
    ];

    const content = document.getElementById( 'content' );

    for ( let i = 0; i < projectAmount; i ++ ) {

        const scene = new THREE.Scene();

        // make a list item
        const element = document.createElement( 'div' );
        element.className = 'list-item';
        
        const sceneElement = document.createElement( 'div' );
        sceneElement.id = "project" + (i + 1);
        sceneElement.style.width = window.innerWidth + "px";
        sceneElement.style.height = window.innerHeight + "px";
        sceneElement.style.touchAction = "auto";
        element.appendChild( sceneElement );
        
        const scrollArrows = document.createElement('div');
        scrollArrows.className = "scrollArrows";
        element.appendChild(scrollArrows);

        if(i > 0)
        {
            const arrowElementUp = document.createElement('a');
            arrowElementUp.href = "#project" + i;
            arrowElementUp.className = 'scrollArrow'; 
            scrollArrows.appendChild(arrowElementUp);
            
            const arrowImage = document.createElement('img');
            arrowImage.src = "../images/arrowx32.png";
            arrowImage.alt = "arrow up";
            arrowElementUp.appendChild(arrowImage);

        }

        if(i < projectAmount - 1)
        {
            const arrowElementDown = document.createElement('a');
            arrowElementDown.className = 'scrollArrow'; 
            arrowElementDown.href = "#project" + (i + 2);
            scrollArrows.appendChild(arrowElementDown);

            const arrowImage = document.createElement('img');
            arrowImage.src = "../images/arrowDwnx32.png";
            arrowImage.alt = "down arrow"
            arrowElementDown.appendChild(arrowImage);
            
        }

        // the element that represents the area we want to render the scene
        scene.userData.element = sceneElement;
        content.appendChild( element );

        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 2;
        scene.userData.camera = camera;

        const controls = new OrbitControls( scene.userData.camera, scene.userData.element );
        controls.minDistance = 2;
        controls.maxDistance = 5;
        controls.enablePan = false;
        controls.enableZoom = false;
        scene.userData.controls = controls;

        // add one random mesh to each scene
        const geometry = geometries[ geometries.length * Math.random() | 0 ];

        const material = new THREE.MeshStandardMaterial( {

            color: new THREE.Color().setHSL( Math.random(), 1, 0.75, THREE.SRGBColorSpace ),
            roughness: 0.5,
            metalness: 0,
            flatShading: true

        } );

        scene.add( new THREE.Mesh( geometry, material ) );

        scene.add( new THREE.HemisphereLight( 0xaaaaaa, 0x444444, 3 ) );

        const light = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light.position.set( 1, 1, 1 );
        scene.add( light );

        scenes.push( scene );

    }


    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
    renderer.setClearColor( 0xffffff, 1 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setAnimationLoop( animate );
}

function updateSize() {

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if ( canvas.width !== width || canvas.height !== height ) {

        renderer.setSize( width, height, false );

    }

}

function animate() {

    updateSize();

    canvas.style.transform = `translateY(${window.scrollY}px)`;

    renderer.setClearColor( 0xffffff );
    renderer.setScissorTest( false );
    renderer.clear();

    renderer.setClearColor( 0xe0e0e0 );
    renderer.setScissorTest( true );

    scenes.forEach( function ( scene ) {

        // so something moves
        scene.children[ 0 ].rotation.y = Date.now() * 0.001;

        // get the element that is a place holder for where we want to
        // draw the scene
        const element = scene.userData.element;

        // get its position relative to the page's viewport
        const rect = element.getBoundingClientRect();

        // check if it's offscreen. If so skip it
        if ( rect.bottom < 0 || rect.top > renderer.domElement.clientHeight ||
             rect.right < 0 || rect.left > renderer.domElement.clientWidth ) {

            return; // it's off screen

        }

        // set the viewport
        const width = rect.right - rect.left;
        const height = rect.bottom - rect.top;
        const left = rect.left;
        const bottom = renderer.domElement.clientHeight - rect.bottom;

        renderer.setViewport( left, bottom, width, height );
        renderer.setScissor( left, bottom, width, height );

        const camera = scene.userData.camera;

        //camera.aspect = width / height; // not changing in this example
        //camera.updateProjectionMatrix();

        //scene.userData.controls.update();

        renderer.render( scene, camera );

    } );

}