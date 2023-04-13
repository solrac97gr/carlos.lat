import { Button } from "./index.styles.js";

const reserveLink = "https://calendly.com/cgarciarosales97/30min";

export const ReserveMeeting = () => {
  return (
    <Button href={reserveLink} target="_blank">
      Reservar una reunión
    </Button>
  );
};
