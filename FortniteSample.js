Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const CharacterStats_1 = require("./CharacterStats");
const ActionBar_1 = require("./ActionBar");
const Minimap_1 = require("./Minimap");
const backgroundStyle = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    backgroundImage: __dirname + "/resources/screenie.jpg"
};
const FortniteSample = () => {
    return ((0, preact_1.h)("div", { style: backgroundStyle },
        (0, preact_1.h)(CharacterStats_1.default, null),
        (0, preact_1.h)(ActionBar_1.default, null),
        (0, preact_1.h)(Minimap_1.default, null)));
};
exports.default = FortniteSample;
