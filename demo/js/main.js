import { provideTransitionStates } from "./transition-states.js";

const btn = document.querySelector("button");
const div = document.querySelector("div");

const onEnter = () => {
  div.setAttribute("data-open", "");
};

const onLeave = () => {
  div.removeAttribute("data-open");
};

function handleClick() {
  provideTransitionStates(div, onEnter, onLeave);
}

btn.addEventListener("click", handleClick);
