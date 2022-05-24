Object.defineProperty(exports, "__esModule", { value: true });
const color_parser_1 = require("onejs/utils/color-parser");
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const panelStyle = {
    width: 580,
    height: 80,
    borderRadius: 6,
    position: "Absolute",
    bottom: 80,
    left: 80,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    flexDirection: "Row"
};
const leftSideStyle = {
    flexGrow: 1,
    flexShrink: 1,
};
const rightSideStyle = {
    width: "20%",
    height: "100%",
    flexDirection: "Row",
    justifyContent: "SpaceAround",
    alignItems: "Center",
};
const armorRowStyle = {
    display: "Flex",
    height: "30%",
    flexDirection: "Row",
    justifyContent: "SpaceBetween",
    alignItems: "Center"
};
const armorBarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 356,
    height: "100%"
};
const healthRowStyle = {
    display: "Flex",
    height: "60%",
    flexDirection: "Row",
    justifyContent: "SpaceBetween",
    alignItems: "Center"
};
const healthBarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 356,
    height: "100%"
};
const healthBarMaskStyle = {
    height: "100%",
    overflow: "Hidden",
    width: "100%"
};
const healthBarGradientStyle = {
    width: 356,
    height: "100%"
};
const iconStyle = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    color: "white",
    fontSize: 20,
    height: "100%",
    justifyContent: "Center",
    unityTextAlign: "MiddleCenter",
    width: 40
};
const numberStyle = {
    color: "white",
    fontSize: 20,
    unityFontStyleAndWeight: "Bold",
    height: "100%",
    justifyContent: "Center",
    unityTextAlign: "MiddleCenter",
    width: 50
};
const shieldStyle = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    color: "#89FFFF",
    fontSize: 60,
    height: "100%"
};
const shieldNumberStyle = {
    color: "white",
    fontSize: 30,
    unityFontStyleAndWeight: "Bold",
    unityTextAlign: "MiddleCenter",
};
const CharacterStats = () => {
    var charman = require("charman");
    const [health, setHealth] = (0, hooks_1.useState)(charman.GetHealth());
    (0, hooks_1.useEffect)(() => {
        charman.remove_OnHealthChanged(onHealthChanged);
        charman.add_OnHealthChanged(onHealthChanged);
        onEngineReload(() => {
            charman.remove_OnHealthChanged(onHealthChanged);
        });
    }, []);
    function onHealthChanged(hp) {
        setHealth(hp);
    }
    return ((0, preact_1.h)("div", { style: panelStyle },
        (0, preact_1.h)("div", { style: leftSideStyle },
            (0, preact_1.h)("div", { style: armorRowStyle },
                (0, preact_1.h)("div", { style: iconStyle }, "\uEAE0"),
                (0, preact_1.h)("div", { style: armorBarStyle },
                    (0, preact_1.h)("gradientrect", { colors: [(0, color_parser_1.parseColor)("#007CCC"), (0, color_parser_1.parseColor)("#00A0E6")], style: { width: "50%", height: "100%" } })),
                (0, preact_1.h)("div", { style: numberStyle }, "50")),
            (0, preact_1.h)("div", { style: { height: "10%" } }),
            (0, preact_1.h)("div", { style: healthRowStyle },
                (0, preact_1.h)("div", { style: iconStyle }, "\uE9F5"),
                (0, preact_1.h)("div", { style: healthBarStyle },
                    (0, preact_1.h)("div", { style: Object.assign(Object.assign({}, healthBarMaskStyle), { width: `${health}%`, transitionProperty: ["width"], transitionDuration: [0.5], transitionTimingFunction: ["EaseInOut"] }) },
                        (0, preact_1.h)("gradientrect", { colors: [(0, color_parser_1.parseColor)("#02BC23"), (0, color_parser_1.parseColor)("#48E025")], style: healthBarGradientStyle }))),
                (0, preact_1.h)("div", { style: numberStyle }, health))),
        (0, preact_1.h)("div", { style: rightSideStyle },
            (0, preact_1.h)("div", { style: shieldStyle }, "\uE9C1"),
            (0, preact_1.h)("div", { style: shieldNumberStyle }, "50"))));
};
exports.default = CharacterStats;
