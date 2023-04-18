import { Button } from "./index.styles.js";
import { logEvent } from "../../lib/analytics";

const reserveLink = "https://calendly.com/cgarciarosales97/30min";

export const ReserveMeeting = () => {
  const handleClick = () => {
    logEvent("Button", "Reserve");
  };
  return (
    <Button onClick={
      handleClick
    } href={reserveLink} target="_blank">
      Reservar una reunión
    </Button>
  );
};
