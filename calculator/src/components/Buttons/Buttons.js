import symbols from "../../constants/constants";
import Button from "./Button/Button";

function Buttons() {
  return (
    <div>
      {symbols.map((symbol) => (
        <Button symbol={symbol} key={symbol} />
      ))}
    </div>
  );
}

export default Buttons;
