import { h } from "preact";
import CharacterStats from "./CharacterStats";
import ActionBar from "./ActionBar";
import Minimap from "./Minimap";
const backgroundStyle = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    // backgroundImage: __dirname + "/resources/screenie.jpg"
};
const FortniteSample = () => {
    return (h("div", { style: backgroundStyle },
        h(CharacterStats, null),
        h(ActionBar, null),
        h(Minimap, null)));
};
export default FortniteSample;
