import * as THREE from "three";

import "./style.css"
import HelloScene from "./gl/scene"

const clock = new THREE.Clock()

const scene = new HelloScene()
scene.init()
scene.render()

function tick()
{
    const elapsedTime = clock.getElapsedTime()
    scene.animate(elapsedTime)
    window.requestAnimationFrame(tick)
}

tick()
