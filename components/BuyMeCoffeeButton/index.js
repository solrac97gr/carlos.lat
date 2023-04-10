import Image from "next/image";
import { Button } from "./index.style";

export const BuyMeCoffeeButton = () => {
  return (
    <Button
      href="https://www.buymeacoffee.com/carlosgarcA"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://img.buymeacoffee.com/button-api/?text=Invitar un café&emoji=&slug=carlosgarcA&button_colour=63f3ab&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=FFDD00"
        alt="Buy Me A Coffee"
        width={140}
        height={30}
      />
    </Button>
  );
};
