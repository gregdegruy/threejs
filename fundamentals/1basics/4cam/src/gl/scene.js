import * as THREE from "three";

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
    this.blueCube.rotation.y = 3
  }
  
  init(camType) {    
    switch(camType) {
      case "perspective":
        this.camera = new THREE.PerspectiveCamera(120, aspectRatio)
        break;
      case "orthographic":
        this.camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
        break;
      default:
        this.camera = new THREE.PerspectiveCamera(120, aspectRatio)
    } 
    this.camera.position.set(0, 0, 6)
    
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
    this.render()
  }
}

export default CoolCamScene;
