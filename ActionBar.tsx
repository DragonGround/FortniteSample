import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { Style } from "preact/jsx"

//#region Stylings

const panelStyle: Style = {
    width: 520,
    height: 120,
    position: "Absolute",
    bottom: 80,
    right: 10,
    flexDirection: "Row",
    justifyContent: "SpaceBetween"
}

const slotStyle: Style = {
    width: 80,
    height: 120,
    flexDirection: "Column",
    justifyContent: "FlexEnd",
    alignItems: "Center"
}

const slotFrameStyle: Style = {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
}

const slotItemStyle: Style = {
    ...slotFrameStyle,
    borderWidth: 0,
}

const itemImageStyle: Style = {
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
}

const slotCharStyle: Style = {
    marginTop: 6,
    fontSize: 12,
    unityFontStyleAndWeight: "Bold",
    color: "white",
    textShadow: { offset: [1, 1], blurRadius: 0, color: "black" },
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    padding: [2, 6, 2, 6],
    borderColor: "rgba(255, 255, 255, 0.3)"
}

const vignetteStyle: Style = {
    backgroundImage: `${__dirname}/resources/vignette.png`,
    width: "100%",
    height: "100%",
    unityBackgroundScaleMode: "ScaleAndCrop",
    borderColor: "white"
}

//#endregion

enum Rarity {
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary
}

const RarityColors = ["#A3A9AF", "#57B001", "#00A2EA", "#A24DC6", "#FEA741"]

const Slot = ({ itemName, rarity, char, selected }: { itemName?: string, rarity?: Rarity, char?: string, selected?: boolean }) => {
    rarity = rarity ?? Rarity.Common
    let rarityColor = RarityColors[rarity]
    return (
        <div style={slotStyle}>
            {itemName ? <div style={{ ...slotItemStyle, backgroundColor: rarityColor, marginBottom: selected ? 12 : 0, transitionProperty: ["margin-bottom"], transitionDuration: [0.4], transitionTimingFunction: ["EaseInOut"] }}>
                <div style={{ ...itemImageStyle, backgroundImage: `${__dirname}/resources/${itemName}.png` }}>
                    <div style={{ ...vignetteStyle, borderWidth: selected ? 2 : 0 }}></div>
                </div>
            </div> : <div style={slotFrameStyle}></div>}
            <div style={slotCharStyle}>{char || "X"}</div>
        </div>
    )
}

const ActionBar = () => {
    var charman = require("charman") as FortniteSample.CharacterManager

    const [slotIndex, setSlotIndex] = useState(charman.GetSlotIndex())

    useEffect(() => {
        // Good practice to always clean up event handler to prevent leaks during Live Reload
        charman.remove_OnSlotIndexChanged(onSlotIndexChanged)
        charman.add_OnSlotIndexChanged(onSlotIndexChanged)
        onEngineReload(() => {
            charman.remove_OnSlotIndexChanged(onSlotIndexChanged)
        })
    }, [])

    function onSlotIndexChanged(i: number): void {
        setSlotIndex(i)
    }

    return (
        <div style={panelStyle}>
            <Slot itemName="daggers" rarity={Rarity.Epic} char="F" selected={slotIndex == 0} />
            <Slot itemName="mk7" rarity={Rarity.Legendary} char="1" selected={slotIndex == 1} />
            <Slot itemName="drum" char="2" selected={slotIndex == 2} />
            <Slot itemName="splash" rarity={Rarity.Rare} char="3" selected={slotIndex == 3} />
            <Slot char="4" />
            <Slot char="5" />
        </div >
    )
}

export default ActionBar