import * as THREE from "three";

const fov = 75
const screen = {
    width: 800,
    height: 600
}
const aspectRatio = screen.width / screen.height

class HelloScene {
  constructor() {
    this.scene = new THREE.Scene()
    this.redGreenGroup = new THREE.Group()
    
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
    
    const redCube = new THREE.Mesh(
        this.cubeGeometry,
        new THREE.MeshBasicMaterial({ color: 0xff6961 })
    )
    redCube.position.z = -3
    const greenCube = new THREE.Mesh(
        this.cubeGeometry,
        new THREE.MeshBasicMaterial({ color: 0x77dd77 })
    )
    greenCube.scale.set(0.7, 0.7, 0.7)

    this.redGreenGroup.add(redCube)
    this.redGreenGroup.add(greenCube)
    this.redGreenGroup.position.x = 1.5
    this.redGreenGroup.rotation.z = 0.4

    this.scene.add(this.blueCube)
    this.scene.add(this.redGreenGroup)
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

  animate(elapsedTime) {
    this.redGreenGroup.rotation.y = elapsedTime * Math.PI * 0.02
    this.redGreenGroup.rotation.z = elapsedTime * Math.PI * 1.2
    this.blueCube.rotation.z = Math.cos(elapsedTime * Math.PI * 0.2)
    this.camera.position.x = Math.cos(elapsedTime * Math.PI * 0.2)
    this.camera.position.y = Math.sin(elapsedTime * Math.PI * 0.2)
    this.render()
  }
}

export default HelloScene;
