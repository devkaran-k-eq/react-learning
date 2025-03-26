import { atom } from "jotai";
import {loadable} from "jotai/utils"

export const counterAtom = atom(0);
export const doubleCounterAtom = atom((get) => get(counterAtom) * 2);

const fetchData = atom(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

export const loadData = loadable(fetchData) // load data
