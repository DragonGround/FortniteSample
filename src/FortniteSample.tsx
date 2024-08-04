import { h } from "preact"
import CharacterStats from "./CharacterStats"
import ActionBar from "./ActionBar"
import Minimap from "./Minimap"
import { DomStyle } from "OneJS/Dom"

const backgroundStyle: Partial<DomStyle> = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    // backgroundImage: __dirname + "/resources/screenie.jpg"
}

const FortniteSample = () => {
    return (
        <div style={backgroundStyle}>
            <CharacterStats />
            <ActionBar />
            <Minimap />
        </div>
    )
}

export default FortniteSample