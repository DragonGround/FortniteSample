import { render, h } from "preact"
import FortniteSample from "./FortniteSample"
import { update } from "tweenjs"

render(<FortniteSample />, document.body)

function animate(time) {
    requestAnimationFrame(animate)
    update(time)
}
requestAnimationFrame(animate)