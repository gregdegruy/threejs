import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvas = document.getElementById("universe-canvas")

const fov = 75
const screen = {
    width: 800,
    height: 600
}
const aspectRatio = screen.width / screen.height
const cursor = {
  x: 0,
  y: 0
}

class CoolCamScene {
  constructor() {
    this.scene = new THREE.Scene()
    
    this.cubeGeometry = new THREE.BoxGeometry(1,1,1)
    const blueMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00aaff
    })
    this.blueCube = new THREE.Mesh(this.cubeGeometry, blueMaterial)
    const blueWireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      wireframe: true
    })
    this.blueWireframe = new THREE.Mesh(this.cubeGeometry, blueWireframeMaterial)
  }
  
  init(camType) {    
    switch(camType) {
      case "perspective":
        this.camera = new THREE.PerspectiveCamera(fov, aspectRatio)
        break;
      case "orthographic":
        this.camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
        break;
      default:
        this.camera = new THREE.PerspectiveCamera(fov, aspectRatio)
    }     
    this.camera.position.z = 4
    
    const axesLength = 4
    const axesHelper = new THREE.AxesHelper(axesLength);

    this.scene.add(this.blueCube)
    this.scene.add(this.blueWireframe)
    this.scene.add(this.camera)
    this.scene.add(axesHelper)

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / screen.width - 0.5
      cursor.y = (event.clientY / screen.height - 0.5) * -1
    })
  }
 
  render() {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(screen.width, screen.height)
    renderer.render(this.scene, this.camera)
  }

  animateCubes(elapsedTime) {
    let amplitude = 5
    this.camera.position.x = cursor.x * amplitude
    this.camera.position.y = cursor.y * amplitude
    this.camera.lookAt(this.blueCube.position)
    this.render()
  }

  animateCubesFullRevolution(elapsedTime) {
    let fullRotation = Math.PI * 2
    this.camera.position.x = Math.sin(cursor.x * fullRotation)
    this.camera.position.z = Math.cos(cursor.x * fullRotation)
    this.camera.position.y = cursor.y * 5
    this.camera.lookAt(this.blueCube.position)
    this.render()
  }

  animateCubesWithOrbitControls(elapsedTime) {
    const controls = new OrbitControls(this.camera, canvas)
    controls.enableDamping = true
    controls.update()
    this.render()
  }
}

export default CoolCamScene;
