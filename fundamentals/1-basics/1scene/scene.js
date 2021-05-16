const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x00aaff})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const fov = 75
const sizes = {
    width: 800,
    height: 600
}
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(fov, aspectRatio)
camera.position.z = 3

scene.add(camera)

const canvas = document.getElementById("universe-canvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
