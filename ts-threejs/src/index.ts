import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const fov = 75;
const aspectRatio = window.innerWidth / window.innerHeight
const camBoundaryNear = 0.1;
const camBoundaryFar = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, camBoundaryNear, camBoundaryFar);
const renderer = new THREE.WebGLRenderer();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener('resize', () =>
{
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(100, 100, 100);
scene.add(light);
const light2 = new THREE.DirectionalLight(0xffffff, 1.0);
light2.position.set(-100, 100, -100);
scene.add(light2);

const geoemtry = new THREE.CubeGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00aaff,
  wireframe: true,
});


const cube = new THREE.Mesh(geoemtry, material);
scene.add(cube);

cube.position.x = 0.5;
cube.rotation.y = 0.5;

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
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera);
}

animate();
