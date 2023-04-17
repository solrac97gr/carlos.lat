import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-3NLB9G51E3");
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
