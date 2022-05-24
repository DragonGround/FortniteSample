import { h } from "preact"
import { Style } from "preact/jsx"
import CharacterStats from "./CharacterStats"
import ActionBar from "./ActionBar"
import Minimap from "./Minimap"

const backgroundStyle: Style = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    backgroundImage: __dirname + "/resources/screenie.jpg"
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