import { h } from "preact"
import { useEffect, useEventfulState, useState } from "preact/hooks"

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
        <div class="w-20 h-30 flex flex-col justify-end items-center">
            {itemName ? (
                <div class={`w-20 h-20 ${selected ? 'mb-3' : 'mb-0'} transition-all duration-400 ease-in-out`} style={{ backgroundColor: rarityColor }}>
                    <div class="w-full h-full bg-cover bg-center" style={{ backgroundImage: `assets/@fortnite-sample/${itemName}.png` }}>
                        <div class={`w-full h-full bg-cover bg-center ${selected ? 'border-2 border-white' : ''}`}></div>
                    </div>
                </div>
            ) : (
                <div class="w-20 h-20 border border-white border-opacity-50"></div>
            )}
            <div class="mt-1.5 text-xs font-bold text-white shadow-text bg-black bg-black/50 border border-white border-opacity-30 px-1.5 py-0.5">
                {char || "X"}
            </div>
        </div>
    )
}

declare const sam: CS.OneJS.Samples.SampleCharacter

const ActionBar = () => {
    const [slotIndex, setSlotIndex] = useEventfulState(sam, "SlotIndex")

    function onSlotIndexChanged(i: number): void {
        setSlotIndex(i)
    }

    return (
        <div class="w-[520px] h-[120px] absolute bottom-20 right-2.5 flex flex-row justify-between">
            <Slot itemName="daggers" rarity={Rarity.Epic} char="F" selected={slotIndex == 0} />
            <Slot itemName="mk7" rarity={Rarity.Legendary} char="1" selected={slotIndex == 1} />
            <Slot itemName="drum" char="2" selected={slotIndex == 2} />
            <Slot itemName="splash" rarity={Rarity.Rare} char="3" selected={slotIndex == 3} />
            <Slot char="4" />
            <Slot char="5" />
        </div>
    )
}

export default ActionBar