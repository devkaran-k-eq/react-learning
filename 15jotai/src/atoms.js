import { atom } from "jotai";

export const counterAtom = atom(0);
export const doubleCounterAtom = atom((get) => get(counterAtom) * 2)