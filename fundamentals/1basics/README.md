## threejs
JS API. Native WebGL takes 100 lines of code to draw 1 tri... no way. More control and optimization though, that old chestnut.

Perspective camera, near objects appear big and far objects appear small.

FOV is based on angles that determine how much of the observable world you can see.

⚠ If you don't set the `camera.position.set(x, y, z)` you will a black screen because the camera is at the center of the scene or inside an object at the center of the scene, since the object material only shows on the surface not the inside by default.

## WebGL
Fast calcs happen on one CPU 8 cores 1 browser app, 1 for running your game in browser...
Draw vertices pixels is done by GPU. Slower calcs, but can do thousands in a row. 

Rendering is like taking a photo with your camera.

Transforms position, scale, rotation, quaternion. Ever thing is compiled down to a matrix and sent to the GPU. Quaternion and rotation both impact rotation. `MATH.PI` can be used for half rotations among other things.

Y rotation is like shaking your head No. So X is a yes shake.

Rotation axis order can result in a gimbal locked that will prevent rotation of certain axis. The `reorder(...)` function can help?

Objects can be grouped using a scene Graph.

## Webpack
Includes all threejs classes and is better for security.
Common *Watchpack Error (initial scan): Error: EACCES: permission denied* [issues](https://github.com/webpack/webpack-dev-server/issues/2809) using Windows Subsystem for Linux. Using CMD or PowerShell live reload works like a charm.

## Animation

Animation must play the same regardless of FPS, `requestAnimationFrame(callback: FrameRequestCallback): number` does just that! Trig functions `sin`. `cos` etc. can be used to keep animations in the bounds of the scene. Do not use getDelta on `clock` method.
