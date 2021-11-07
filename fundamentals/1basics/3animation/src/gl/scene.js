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
    this.camera
  }

  init() {
    const geometry = new THREE.BoxGeometry(1,1,1)
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff})
    const blueCube = new THREE.Mesh(geometry, blueMaterial)
    blueCube.position.set(-2, -1, -0.5)

    this.camera = new THREE.PerspectiveCamera(fov, aspectRatio)
    this.camera.position.set(0.5, 0.5, 3.5)

    const axesLength = 4
    const axesHelper = new THREE.AxesHelper(axesLength);

    const group = new THREE.Group()
    const redCube = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ color: 0xff6961 })
    )
    redCube.position.z = -3
    const greenCube = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ color: 0x77dd77 })
    )
    greenCube.scale.set(0.7, 0.7, 0.7)
    greenCube.position.z = 1
    group.add(redCube)
    group.add(greenCube)
    group.position.x = 1.5
    group.rotation.z = 0.4

    this.scene.add(blueCube)
    this.scene.add(this.camera)
    this.scene.add(axesHelper)
    this.scene.add(group)
  }

  createMesh() {

  }


  render() {
    const canvas = document.getElementById("universe-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(screen.width, screen.height)
    renderer.render(this.scene, this.camera)
  }
}

export default HelloScene;
