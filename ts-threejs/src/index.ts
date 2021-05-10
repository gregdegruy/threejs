import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const fov = 75;
const aspectRatio = window.innerWidth / window.innerHeight
const camBoundaryNear = 0.1;
const camBoundaryFar = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, camBoundaryNear, camBoundaryFar);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(100, 100, 100);
scene.add(light);
const light2 = new THREE.DirectionalLight(0xffffff, 1.0);
light2.position.set(-100, 100, -100);
scene.add(light2);

const material = new THREE.MeshBasicMaterial({
  color: 0xaaaaaa,
  wireframe: true,
});

const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
scene.add(box);

box.position.x = 0.5;
box.rotation.y = 0.5;

camera.position.x = 5;
camera.position.y = 5;
camera.position.z = 5;

camera.lookAt(scene.position);

function animate(): void {
  requestAnimationFrame(animate);
  render();
}

function render(): void {
  const timer = 0.002 * Date.now();
  box.position.y = 0.5 + 0.5 * Math.sin(timer);
  box.rotation.x += 0.1;
  renderer.render(scene, camera);
}

animate();
