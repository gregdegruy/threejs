import * as THREE from "three";
import gsap from "gsap"

const fov = 75
const screen = {
    width: 800,
    height: 600
}
const aspectRatio = screen.width / screen.height

class CoolCamScene {
  constructor() {
    this.scene = new THREE.Scene()
    
    this.cubeGeometry = new THREE.BoxGeometry(1,1,1)
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff})
    this.blueCube = new THREE.Mesh(this.cubeGeometry, blueMaterial)
  }
  
  init() {
    this.blueCube.position.set(-2, -1, -0.5)
    
    this.camera = new THREE.PerspectiveCamera(fov, aspectRatio)
    this.camera.position.set(0.5, 0.5, 3.5)
    
    const axesLength = 4
    const axesHelper = new THREE.AxesHelper(axesLength);

    this.scene.add(this.blueCube)
    this.scene.add(this.camera)
    this.scene.add(axesHelper)
  }
 
  render() {
    const canvas = document.getElementById("universe-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(screen.width, screen.height)
    renderer.render(this.scene, this.camera)
  }

  animateCubes(elapsedTime) {
    this.blueCube.rotation.z = Math.cos(elapsedTime * Math.PI * 0.2)
    this.camera.position.x = Math.cos(elapsedTime * Math.PI * 0.2)
    this.camera.position.y = Math.sin(elapsedTime * Math.PI * 0.2)
    this.render()
  }

  animateCubesWithGSAP() {
    gsap.to(this.redGreenGroup.position, { duration: 1, delay: 1, x: 2})
    this.render()
  }
}

export default CoolCamScene;
