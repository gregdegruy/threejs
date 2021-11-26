import * as THREE from "three";

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
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff})
    this.blueCube = new THREE.Mesh(this.cubeGeometry, blueMaterial)
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
    this.camera.position.z = 8
    
    const axesLength = 4
    const axesHelper = new THREE.AxesHelper(axesLength);

    this.scene.add(this.blueCube)
    this.scene.add(this.camera)
    this.scene.add(axesHelper)

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / screen.width - 0.5
      cursor.y = event.clientY / screen.height - 0.5
    })
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
    this.blueCube.rotation.y = elapsedTime
    this.camera.position.x = cursor.x * -1
    this.camera.position.y = cursor.y
    this.render()
  }
}

export default CoolCamScene;
