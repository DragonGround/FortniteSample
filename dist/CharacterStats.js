import { parseColor } from "onejs/utils/color-parser";
import { h } from "preact";
import { useEventfulState } from "preact/hooks";
sam.Health = 100;
sam.MaxHealth = 100;
const CharacterStats = () => {
    const [health, setHealth] = useEventfulState(sam, "Health");
    return (h("div", { class: "w-[580px] h-20 rounded-md absolute bottom-20 left-20 bg-black bg-black/40 p-2.5 flex flex-row" },
        h("div", { class: "flex-grow flex-shrink" },
            h("div", { class: "flex h-[30%] flex-row justify-between items-center" },
                h("div", { class: "text-white text-xl h-full flex items-center justify-center w-10 rpgawesome" }, "\uEAE0"),
                h("div", { class: "bg-black/40 w-[356px] h-full" },
                    h("gradientrect", { colors: [parseColor("#007CCC"), parseColor("#00A0E6")], class: "w-1/2 h-full" })),
                h("div", { class: "text-white text-xl font-bold h-full flex items-center justify-center w-[50px]" }, "50")),
            h("div", { class: "h-[10%]" }),
            h("div", { class: "flex h-[60%] flex-row justify-between items-center" },
                h("div", { class: "text-white text-xl h-full flex items-center justify-center w-10 rpgawesome" }, "\uE9F5"),
                h("div", { class: "bg-black/40 w-[356px] h-full" },
                    h("div", { class: `h-full overflow-hidden transition-[width] duration-500 ease-in-out`, style: { width: `${health}%` } },
                        h("gradientrect", { colors: [parseColor("#02BC23"), parseColor("#48E025")], class: "w-[356px] h-full" }))),
                h("div", { class: "text-white text-xl font-bold h-full flex items-center justify-center w-[50px]" }, health | 0))),
        h("div", { class: "w-1/5 h-full flex flex-row justify-around items-center" },
            h("div", { class: "text-[#89FFFF] text-[60px] h-full rpgawesome" }, "\uE9C1"),
            h("div", { class: "text-white text-3xl font-bold" }, "50"))));
};
export default CharacterStats;
