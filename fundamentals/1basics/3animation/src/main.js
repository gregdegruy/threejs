import "./style.css"
import HelloScene from "./gl/scene"

const scene = new HelloScene()
scene.init()

let previousTime = Date.now()

const tick = () =>
{
    const currentTime = new Date(Date.now())
    const frameworkNormalizationValue = currentTime - previousTime
    previousTime = currentTime
    console.log(`tick: ${currentTime.toUTCString()} - delta: ${frameworkNormalizationValue}`)
    scene.render()
    window.requestAnimationFrame(tick)
}

tick()
