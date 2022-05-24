Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const tween_1 = require("tweenjs/tween");
const panelStyle = {
    width: 300,
    height: 400,
    position: "Absolute",
    top: 10,
    right: 10,
    flexDirection: "Column",
};
const minimapStyle = {
    position: "Relative",
    width: 300,
    height: 300,
    backgroundColor: "beige",
    overflow: "Hidden"
};
const mapStyle = {
    position: "Absolute",
    top: -850,
    left: -850,
    width: 1400,
    height: 1400,
    backgroundImage: `${__dirname}/resources/map.jpg`
};
const markerStyle = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    position: "Absolute",
    top: 140,
    left: 140,
    color: "beige",
    fontSize: 20,
    textShadow: { offset: [0, 0], blurRadius: 4, color: "black" }
};
const statsBarStyle = {
    flexDirection: "Row",
    marginTop: 8,
    alignItems: "Center",
    justifyContent: "Center"
};
const statsIconStyle = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    fontSize: 16,
    color: "white",
    width: 26,
    height: 26,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 13,
    unityTextAlign: "MiddleCenter",
    justifyContent: "Center"
};
const statsTextStyle = {
    fontSize: 18,
    color: "white",
    unityFontStyleAndWeight: "Bold",
    paddingLeft: 6,
    paddingRight: 12
};
const Minimap = () => {
    const mapRef = (0, hooks_1.useRef)();
    const hourGlassRef = (0, hooks_1.useRef)();
    let hourGlassBool = false;
    (0, hooks_1.useEffect)(() => {
        let pos = { x: 0, y: 0 };
        const tween = new tween_1.Tween(pos).to({ x: pos.x + 600, y: pos.y + 600 }, 10000)
            .easing(tween_1.Easing.Quadratic.InOut).onUpdate(() => {
            mapRef.current.style.translate = pos;
        }).repeat(Infinity).yoyo(true).start();
        function pulseHourGlass() {
            hourGlassRef.current.style.color = hourGlassBool ? "white" : "red";
            hourGlassBool = !hourGlassBool;
            setTimeout(pulseHourGlass, 2000);
        }
        pulseHourGlass();
    }, []);
    return ((0, preact_1.h)("div", { style: panelStyle },
        (0, preact_1.h)("div", { style: minimapStyle },
            (0, preact_1.h)("div", { ref: mapRef, style: Object.assign({}, mapStyle) }),
            (0, preact_1.h)("div", { style: markerStyle }, "\uEAC5")),
        (0, preact_1.h)("div", { style: statsBarStyle },
            (0, preact_1.h)("div", { ref: hourGlassRef, style: Object.assign(Object.assign({}, statsIconStyle), { transitionProperty: ["color"], transitionDuration: [2], transitionTimingFunction: ["EaseInOut"] }) }, "\uEA09"),
            (0, preact_1.h)("div", { style: statsTextStyle }, "0:36"),
            (0, preact_1.h)("div", { style: statsIconStyle }, "\uEA48"),
            (0, preact_1.h)("div", { style: statsTextStyle }, "25"),
            (0, preact_1.h)("div", { style: statsIconStyle }, "\uEAA1"),
            (0, preact_1.h)("div", { style: statsTextStyle }, "7"))));
};
exports.default = Minimap;
