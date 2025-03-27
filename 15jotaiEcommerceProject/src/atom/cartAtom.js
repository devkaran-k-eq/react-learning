import { atom } from "jotai";

export const cartAtom = atom([])

export const totalAtom = atom((get) => {
    get(cartAtom).reduce( (sum,item) =>  sum + item.price ,0)
})