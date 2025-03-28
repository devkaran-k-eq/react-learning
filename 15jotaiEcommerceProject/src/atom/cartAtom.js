import { atom } from "jotai";
import {loadable} from "jotai/utils"

export const cartAtom = atom([]);

export const totalAtom = atom((get) => {
  return get(cartAtom).reduce((sum, item) => {
    console.log(Math.ceil(item.price * item.quantity).toFixed(2));
    return sum + item.price * item.quantity;
  }, 0);
});

export const totalQuantity = atom((get) => {
  return get(cartAtom).reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
});
// console.log("Total Atom", totalAtom);
// console.log("cartAtom", cartAtom);

const fetchDataAtom = atom(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return "fetched Data!!!"
});


export const loadableDataAtom = loadable(fetchDataAtom)