import { CalculatorContext } from "../../store/CalculatorProvider";
import { useContext } from "react";
function Screen() {
  const {result} = useContext(CalculatorContext);

  return <div>{result.count}</div>;
}

export default Screen;
