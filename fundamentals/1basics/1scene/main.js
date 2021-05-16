const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00aaff})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const fov = 75
const screen = {
    width: 800,
    height: 600
}
const aspectRatio = screen.width / screen.height
const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
camera.position.z = 3

scene.add(camera)

const canvas = document.getElementById("universe-canvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(screen.width, screen.height)
renderer.render(scene, camera)
