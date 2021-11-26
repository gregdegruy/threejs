import * as THREE from "three"

import "./style.css"
import CoolCamScene from "./gl/scene"

const clock = new THREE.Clock()

const scene = new CoolCamScene()
scene.init()
scene.render()

function tick()
{
    const elapsedTime = clock.getElapsedTime()
    scene.animateCubes(elapsedTime)
    // scene.animateCam(elapsedTime)
    // scene.animateCubesWithGSAP()
    window.requestAnimationFrame(tick)
}

tick()
