import { h } from "preact"
import ActionBar from "./ActionBar"
import CharacterStats from "./CharacterStats"
import Minimap from "./Minimap"

document.addRuntimeUSS(`
.rpgawesome {
    -unity-font-definition: url("assets/@fortnite-sample/rpgawesome.ttf");
}
`)

var bgTex = resource.loadImage("assets/@fortnite-sample/screenie2.jpg")

export const FortniteSample = () => {
    return (
        <div class="w-full h-full bg-orange-400 bg-crop" style={{ backgroundImage: bgTex }}>
            <ActionBar />
            <CharacterStats />
            <Minimap />
        </div>
    )
}