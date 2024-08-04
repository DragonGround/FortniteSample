import { parseColor } from "onejs/utils/color-parser"
import { h } from "preact"
import { useEffect, useEventfulState, useState } from "preact/hooks"

declare const sam: CS.OneJS.Samples.SampleCharacter

sam.Health = 100
sam.MaxHealth = 100

const CharacterStats = () => {
    const [health, setHealth] = useEventfulState(sam, "Health")

    return (
        <div class="w-[580px] h-20 rounded-md absolute bottom-20 left-20 bg-black bg-black/40 p-2.5 flex flex-row">
            <div class="flex-grow flex-shrink">
                <div class="flex h-[30%] flex-row justify-between items-center">
                    <div class="text-white text-xl h-full flex items-center justify-center w-10 rpgawesome">&#xEAE0;</div>
                    <div class="bg-black/40 w-[356px] h-full">
                        <gradientrect colors={[parseColor("#007CCC"), parseColor("#00A0E6")]} class="w-1/2 h-full" />
                    </div>
                    <div class="text-white text-xl font-bold h-full flex items-center justify-center w-[50px]">50</div>
                </div>
                <div class="h-[10%]"></div>
                <div class="flex h-[60%] flex-row justify-between items-center">
                    <div class="text-white text-xl h-full flex items-center justify-center w-10 rpgawesome">&#xE9F5;</div>
                    <div class="bg-black/40 w-[356px] h-full">
                        <div class={`h-full overflow-hidden transition-[width] duration-500 ease-in-out`} style={{ width: `${health}%` }}>
                            <gradientrect colors={[parseColor("#02BC23"), parseColor("#48E025")]} class="w-[356px] h-full" />
                        </div>
                    </div>
                    <div class="text-white text-xl font-bold h-full flex items-center justify-center w-[50px]">{health | 0}</div>
                </div>
            </div>
            <div class="w-1/5 h-full flex flex-row justify-around items-center">
                <div class="text-[#89FFFF] text-[60px] h-full rpgawesome">&#xE9C1;</div>
                <div class="text-white text-3xl font-bold">50</div>
            </div>
        </div>
    )
}

export default CharacterStats