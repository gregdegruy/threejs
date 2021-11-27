import * as THREE from "three"

import "./style.css"
import CoolCamScene from "./gl/scene"

const clock = new THREE.Clock()

const scene = new CoolCamScene()
scene.init("orthographic")
scene.render()

function tick()
{
    const elapsedTime = clock.getElapsedTime()
    // scene.animateCubes(elapsedTime)
    // scene.animateCubesFullRevolution(elapsedTime)
    scene.animateCubesWithOrbitControls(elapsedTime)
    window.requestAnimationFrame(tick)
}

tick()
