import "./style.css"
import HelloScene from "./gl/scene"

const scene = new HelloScene()
scene.init()

const tick = () =>
{
    console.log('tick')
    scene.render()
    window.requestAnimationFrame(tick)
}

tick()
