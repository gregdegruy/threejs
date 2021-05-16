import * as THREE from "three";

class Scene {
  constructor() {
    // this.scene = new THREE.Scene();

    // this.camera = new THREE.PerspectiveCamera(
    //   45,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   100
    // );

    // this.camera.position.z = 1;
    // this.renderer = new THREE.WebGLRenderer({
    //   canvas: document.querySelector("#app"),
    //   antialias: true
    // });
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.setClearColor(0xffffff, 1);
  }

  init() {
    const scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(1,1,1)
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff})
    const blueCube = new THREE.Mesh(geometry, blueMaterial)
    blueCube.position.set(-2, -1, -0.5)

    const fov = 75
    const screen = {
        width: 800,
        height: 600
    }
    const aspectRatio = screen.width / screen.height
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
    camera.position.set(0.5, 0.5, 3.5)

    const axesLength = 4
    const axesHelper = new THREE.AxesHelper(axesLength);
    // camera.lookAt(axesHelper.position)

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

    scene.add(blueCube)
    scene.add(camera)
    scene.add(axesHelper)
    scene.add(group)
    const canvas = document.getElementById("universe-canvas");
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(screen.width, screen.height)
    renderer.render(scene, camera)
  }

  createMesh() {

  }


  render() {

  }
}

export default Scene;
