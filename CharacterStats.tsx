import { parseColor } from "onejs/utils/color-parser"
import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { Style } from "preact/jsx"

//#region Stylings

const panelStyle: Style = {
    width: 580,
    height: 80,
    borderRadius: 6,
    position: "Absolute",
    bottom: 80,
    left: 80,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    flexDirection: "Row"
}

const leftSideStyle: Style = {
    flexGrow: 1,
    flexShrink: 1,
}

const rightSideStyle: Style = {
    width: "20%",
    height: "100%",
    flexDirection: "Row",
    justifyContent: "SpaceAround",
    alignItems: "Center",
}

const armorRowStyle: Style = {
    display: "Flex",
    height: "30%",
    flexDirection: "Row",
    justifyContent: "SpaceBetween",
    alignItems: "Center"
}

const armorBarStyle: Style = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 356,
    height: "100%"
}

const healthRowStyle: Style = {
    display: "Flex",
    height: "60%",
    flexDirection: "Row",
    justifyContent: "SpaceBetween",
    alignItems: "Center"
}

const healthBarStyle: Style = {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 356,
    height: "100%"
}

const healthBarMaskStyle: Style = {
    height: "100%",
    overflow: "Hidden",
    width: "100%"
}

const healthBarGradientStyle: Style = {
    width: 356,
    height: "100%"
}

const iconStyle: Style = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    color: "white",
    fontSize: 20,
    height: "100%",
    justifyContent: "Center",
    unityTextAlign: "MiddleCenter",
    width: 40
}

const numberStyle: Style = {
    color: "white",
    fontSize: 20,
    unityFontStyleAndWeight: "Bold",
    height: "100%",
    justifyContent: "Center",
    unityTextAlign: "MiddleCenter",
    width: 50
}

const shieldStyle: Style = {
    unityFontDefinition: __dirname + "/resources/rpgawesome.ttf",
    color: "#89FFFF",
    fontSize: 60,
    height: "100%"
}

const shieldNumberStyle: Style = {
    color: "white",
    fontSize: 30,
    unityFontStyleAndWeight: "Bold",
    unityTextAlign: "MiddleCenter",
}

//#endregion

const CharacterStats = () => {

    var charman = require("charman") as FortniteSample.CharacterManager

    const [health, setHealth] = useState(charman.GetHealth())

    useEffect(() => {
        // Good practice to always clean up event handler to prevent leaks during Live Reload
        charman.remove_OnHealthChanged(onHealthChanged)
        charman.add_OnHealthChanged(onHealthChanged)
        onEngineReload(() => {
            charman.remove_OnHealthChanged(onHealthChanged)
        })
    }, [])

    function onHealthChanged(hp: number): void {
        setHealth(hp)
    }

    return (
        <div style={panelStyle}>
            <div style={leftSideStyle}>
                <div style={armorRowStyle}>
                    <div style={iconStyle}>&#xEAE0;</div>
                    <div style={armorBarStyle}><gradientrect colors={[parseColor("#007CCC"), parseColor("#00A0E6")]} style={{ width: "50%", height: "100%" }} /></div>
                    <div style={numberStyle}>50</div>
                </div>
                <div style={{ height: "10%" }}></div>
                <div style={healthRowStyle}>
                    <div style={iconStyle}>&#xE9F5;</div>
                    <div style={healthBarStyle}>
                        <div style={{...healthBarMaskStyle, width: `${health}%`, transitionProperty: ["width"], transitionDuration: [0.5], transitionTimingFunction: ["EaseInOut"]}}>
                            <gradientrect colors={[parseColor("#02BC23"), parseColor("#48E025")]} style={healthBarGradientStyle} />
                        </div>
                    </div>
                    <div style={numberStyle}>{health}</div>
                </div>
            </div>
            <div style={rightSideStyle}>
                <div style={shieldStyle}>&#xE9C1;</div>
                <div style={shieldNumberStyle}>50</div>
            </div>
        </div >
    )
}

export default CharacterStats