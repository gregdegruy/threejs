## threejs
JS API. Native WebGL takes 100 lines of code to draw 1 tri... no way. More control and optimization though, that old chestnut.

Perspective camera, near objects appear big and far objects appear small.

FOV is based on angles that determine how much of the observable world you can see.

## WebGL
Fast calcs happen on one CPU 8 cores 1 browser app, 1 for running your game in browser...
Draw vertices pixels is done by GPU. Slower calcs, but can thousands in a row. 

Rendering is like taking a photo with your camera.

Transforms position, scale, rotation, quaternion. Ever thing is compiled down to a matrix and sent to the GPU.

## Webpack
Includes all threejs classes and is better for security.
Common *Watchpack Error (initial scan): Error: EACCES: permission denied* [issues](https://github.com/webpack/webpack-dev-server/issues/2809) using Windows Subsystem for Linux. Using CMD or PowerShell live reload works like a charm.
