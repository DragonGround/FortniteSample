import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Easing, Tween } from "@tweenjs/tween.js";
let tween = undefined;
var mapTex = resource.loadImage("assets/@fortnite-sample/map.jpg");
function animate(time) {
    if (tween)
        tween.update(time);
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
const Minimap = () => {
    const mapRef = useRef();
    const hourGlassRef = useRef();
    let hourGlassBool = false;
    useEffect(() => {
        let pos = { x: 0, y: 0 };
        tween = new Tween(pos).to({ x: pos.x + 600, y: pos.y + 600 }, 10000)
            .easing(Easing.Quadratic.InOut).onUpdate(() => {
            mapRef.current.style.translate = `${pos.x}px ${pos.y}px`;
        }).repeat(Infinity).yoyo(true).start();
        function pulseHourGlass() {
            hourGlassRef.current.style.color = hourGlassBool ? "white" : "red";
            hourGlassBool = !hourGlassBool;
            setTimeout(pulseHourGlass, 1000);
        }
        pulseHourGlass();
    }, []);
    return (h("div", { class: "w-[300px] h-[400px] absolute top-2.5 right-2.5 flex flex-col" },
        h("div", { class: "relative w-[300px] h-[300px] bg-beige overflow-hidden" },
            h("div", { ref: mapRef, class: "absolute -top-[850px] -left-[850px] w-[1400px] h-[1400px]", style: { backgroundImage: mapTex } }),
            h("div", { class: "absolute top-[140px] left-[140px] text-beige text-xl rpgawesome" }, "\uEAC5")),
        h("div", { class: "flex flex-row mt-2 items-center justify-center" },
            h("div", { ref: hourGlassRef, class: "text-base text-white w-[26px] h-[26px] bg-black/30 rounded-full flex items-center justify-center duration-1000 transition-colors ease-in-out rpgawesome" }, "\uEA09"),
            h("div", { class: "text-lg text-white font-bold pl-1.5 pr-3" }, "0:36"),
            h("div", { class: "text-base text-white w-[26px] h-[26px] bg-black/30 rounded-full flex items-center justify-center rpgawesome" }, "\uEA48"),
            h("div", { class: "text-lg text-white font-bold pl-1.5 pr-3" }, "25"),
            h("div", { class: "text-base text-white w-[26px] h-[26px] bg-black/30 rounded-full flex items-center justify-center rpgawesome" }, "\uEAA1"),
            h("div", { class: "text-lg text-white font-bold pl-1.5 pr-3" }, "7"))));
};
export default Minimap;
