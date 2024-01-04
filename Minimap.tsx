import { Dom } from "OneJS/Dom"
import { h } from "preact"
import { useEffect, useRef } from "preact/hooks"
import { Style } from "preact/jsx"
import { Easing, Tween } from "tweenjs"

//#region Stylings

const panelStyle: Style = {
    width: 300,
    height: 400,
    position: "Absolute",
    top: 10,
    right: 10,
    flexDirection: "Column",
}

const minimapStyle: Style = {
    position: "Relative",
    width: 300,
    height: 300,
    backgroundColor: "beige",
    overflow: "Hidden"
}

const mapStyle: Style = {
    position: "Absolute",
    top: -850,
    left: -850,
    width: 1400,
    height: 1400,
    backgroundImage: `${__dirname}/resources/map.jpg`
}

const markerStyle: Style = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    position: "Absolute",
    top: 140,
    left: 140,
    color: "beige",
    fontSize: 20,
    textShadow: { offset: [0, 0], blurRadius: 4, color: "black" }
}

const statsBarStyle: Style = {
    flexDirection: "Row",
    marginTop: 8,
    alignItems: "Center",
    justifyContent: "Center"
}

const statsIconStyle: Style = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    fontSize: 16,
    color: "white",
    width: 26,
    height: 26,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 13,
    unityTextAlign: "MiddleCenter",
    justifyContent: "Center"
}

const statsTextStyle: Style = {
    fontSize: 18,
    color: "white",
    unityFontStyleAndWeight: "Bold",
    paddingLeft: 6,
    paddingRight: 12
}

//#endregion

const Minimap = () => {
    const mapRef = useRef<Dom>();
    const hourGlassRef = useRef<Dom>();

    let hourGlassBool = false

    useEffect(() => {
        let pos = { x: 0, y: 0 }
        const tween = new Tween(pos).to({ x: pos.x + 600, y: pos.y + 600 }, 10000)
            .easing(Easing.Quadratic.InOut).onUpdate(() => {
                mapRef.current.style.translate = pos
            }).repeat(Infinity).yoyo(true).start()

        function pulseHourGlass() {
            hourGlassRef.current.style.color = hourGlassBool ? "white" : "red"
            hourGlassBool = !hourGlassBool
            setTimeout(pulseHourGlass, 2000);
        }
        pulseHourGlass()
    }, [])

    return (
        <div style={panelStyle}>
            <div style={minimapStyle}>
                <div ref={mapRef} style={{ ...mapStyle }}></div>
                <div style={markerStyle}>&#xEAC5;</div>
            </div>
            <div style={statsBarStyle}>
                <div ref={hourGlassRef} style={{ ...statsIconStyle, transitionProperty: ["color"], transitionDuration: [2], transitionTimingFunction: ["EaseInOut"] }}>&#xEA09;</div>
                <div style={statsTextStyle}>0:36</div>
                <div style={statsIconStyle}>&#xEA48;</div>
                <div style={statsTextStyle}>25</div>
                <div style={statsIconStyle}>&#xEAA1;</div>
                <div style={statsTextStyle}>7</div>
            </div>
        </div>
    )
}

export default Minimap