import { h } from "preact";
import { useEventfulState } from "preact/hooks";
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
    rarity = rarity ?? Rarity.Common;
    let rarityColor = RarityColors[rarity];
    return (h("div", { class: "w-20 h-30 flex flex-col justify-end items-center" },
        itemName ? (h("div", { class: `w-20 h-20 ${selected ? 'mb-3' : 'mb-0'} transition-all duration-400 ease-in-out`, style: { backgroundColor: rarityColor } },
            h("div", { class: "w-full h-full bg-cover bg-center", style: { backgroundImage: `assets/@fortnite-sample/${itemName}.png` } },
                h("div", { class: `w-full h-full bg-cover bg-center ${selected ? 'border-2 border-white' : ''}` })))) : (h("div", { class: "w-20 h-20 border border-white border-opacity-50" })),
        h("div", { class: "mt-1.5 text-xs font-bold text-white shadow-text bg-black bg-black/50 border border-white border-opacity-30 px-1.5 py-0.5" }, char || "X")));
};
const ActionBar = () => {
    const [slotIndex, setSlotIndex] = useEventfulState(sam, "SlotIndex");
    function onSlotIndexChanged(i) {
        setSlotIndex(i);
    }
    return (h("div", { class: "w-[520px] h-[120px] absolute bottom-20 right-2.5 flex flex-row justify-between" },
        h(Slot, { itemName: "daggers", rarity: Rarity.Epic, char: "F", selected: slotIndex == 0 }),
        h(Slot, { itemName: "mk7", rarity: Rarity.Legendary, char: "1", selected: slotIndex == 1 }),
        h(Slot, { itemName: "drum", char: "2", selected: slotIndex == 2 }),
        h(Slot, { itemName: "splash", rarity: Rarity.Rare, char: "3", selected: slotIndex == 3 }),
        h(Slot, { char: "4" }),
        h(Slot, { char: "5" })));
};
export default ActionBar;
