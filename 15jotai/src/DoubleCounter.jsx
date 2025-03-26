import { useAtom } from "jotai";
import { doubleCounterAtom } from "./atom/atoms";

function DoubleCounter() {
  const [devkaran] = useAtom(doubleCounterAtom);

  return <h2>Double: {devkaran}</h2>;
}

export default DoubleCounter;