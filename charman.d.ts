declare module "charman" {
    export function GetHealth(): number
    export function GetSlotIndex(): number
    export function add_OnHealthChanged(handler: (val: number) => void): void
    export function remove_OnHealthChanged(handler: (val: number) => void): void
    export function add_OnSlotIndexChanged(handler: (val: number) => void): void
    export function remove_OnSlotIndexChanged(handler: (val: number) => void): void
}

declare namespace FortniteSample {
    export interface CharacterManager {
        GetHealth(): number
        GetSlotIndex(): number
        add_OnHealthChanged(handler: (val: number) => void): void
        remove_OnHealthChanged(handler: (val: number) => void): void
        add_OnSlotIndexChanged(handler: (val: number) => void): void
        remove_OnSlotIndexChanged(handler: (val: number) => void): void
    }
}