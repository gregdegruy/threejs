import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00aaff})
const cube = new THREE.Mesh(geometry, material)
cube.position.set(2, -0.6, -3)
scene.add(cube)
// cube.position.normalize()
console.log("Cube len set to 1 with normalization: " + cube.position.length())

const fov = 75
const sizes = {
    width: 800,
    height: 600
}
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
camera.position.z = 3
scene.add(camera)
console.log("Distance between camera and cube: " + cube.position.distanceTo(camera.position))

const canvas = document.getElementById("universe-canvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
