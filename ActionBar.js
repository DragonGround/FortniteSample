Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const panelStyle = {
    width: 520,
    height: 120,
    position: "Absolute",
    bottom: 80,
    right: 10,
    flexDirection: "Row",
    justifyContent: "SpaceBetween"
};
const slotStyle = {
    width: 80,
    height: 120,
    flexDirection: "Column",
    justifyContent: "FlexEnd",
    alignItems: "Center"
};
const slotFrameStyle = {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
};
const slotItemStyle = Object.assign(Object.assign({}, slotFrameStyle), { borderWidth: 0 });
const itemImageStyle = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
};
const slotCharStyle = {
    marginTop: 6,
    fontSize: 12,
    unityFontStyleAndWeight: "Bold",
    color: "white",
    textShadow: { offset: [1, 1], blurRadius: 0, color: "black" },
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    padding: [2, 6, 2, 6],
    borderColor: "rgba(255, 255, 255, 0.3)"
};
const vignetteStyle = {
    backgroundImage: `${__dirname}/resources/vignette.png`,
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    borderColor: "white"
};
var Rarity;
(function (Rarity) {
    Rarity[Rarity["Common"] = 0] = "Common";
    Rarity[Rarity["Uncommon"] = 1] = "Uncommon";
    Rarity[Rarity["Rare"] = 2] = "Rare";
    Rarity[Rarity["Epic"] = 3] = "Epic";
    Rarity[Rarity["Legendary"] = 4] = "Legendary";
})(Rarity || (Rarity = {}));
const RarityColors = ["#A3A9AF", "#57B001", "#00A2EA", "#A24DC6", "#FEA741"];
const Slot = ({ itemName, rarity, char, selected }) => {
    rarity = rarity !== null && rarity !== void 0 ? rarity : Rarity.Common;
    let rarityColor = RarityColors[rarity];
    return ((0, preact_1.h)("div", { style: slotStyle },
        itemName ? (0, preact_1.h)("div", { style: Object.assign(Object.assign({}, slotItemStyle), { backgroundColor: rarityColor, marginBottom: selected ? 12 : 0, transitionProperty: ["margin-bottom"], transitionDuration: [0.4], transitionTimingFunction: ["EaseInOut"] }) },
            (0, preact_1.h)("div", { style: Object.assign(Object.assign({}, itemImageStyle), { backgroundImage: `${__dirname}/resources/${itemName}.png` }) },
                (0, preact_1.h)("div", { style: Object.assign(Object.assign({}, vignetteStyle), { borderWidth: selected ? 2 : 0 }) }))) : (0, preact_1.h)("div", { style: slotFrameStyle }),
        (0, preact_1.h)("div", { style: slotCharStyle }, char || "X")));
};
const ActionBar = () => {
    var charman = require("charman");
    const [slotIndex, setSlotIndex] = (0, hooks_1.useState)(charman.GetSlotIndex());
    (0, hooks_1.useEffect)(() => {
        charman.remove_OnSlotIndexChanged(onSlotIndexChanged);
        charman.add_OnSlotIndexChanged(onSlotIndexChanged);
        onEngineReload(() => {
            charman.remove_OnSlotIndexChanged(onSlotIndexChanged);
        });
    }, []);
    function onSlotIndexChanged(i) {
        setSlotIndex(i);
    }
    return ((0, preact_1.h)("div", { style: panelStyle },
        (0, preact_1.h)(Slot, { itemName: "daggers", rarity: Rarity.Epic, char: "F", selected: slotIndex == 0 }),
        (0, preact_1.h)(Slot, { itemName: "mk7", rarity: Rarity.Legendary, char: "1", selected: slotIndex == 1 }),
        (0, preact_1.h)(Slot, { itemName: "drum", char: "2", selected: slotIndex == 2 }),
        (0, preact_1.h)(Slot, { itemName: "splash", rarity: Rarity.Rare, char: "3", selected: slotIndex == 3 }),
        (0, preact_1.h)(Slot, { char: "4" }),
        (0, preact_1.h)(Slot, { char: "5" })));
};
exports.default = ActionBar;
