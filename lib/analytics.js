import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-3NLB9G51E3");
};

export const logEvent = (category = "", action = "", label = "", value="") => {
  if (category && action) {
    ReactGA.event({ category, action,label,value });
  }
};
