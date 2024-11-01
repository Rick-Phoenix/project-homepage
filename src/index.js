import "./Styles/styles.scss";
import * as nodes from "./Modules/selectors";
import { createElement } from "./Modules/functions";

const avatar = document.querySelector('div.avatar');
avatar.addEventListener
avatar.onmouseover = flowanimation;

function flowanimation() {
  const compStyle = window.getComputedStyle(avatar);
  const initialAngle = compStyle.getPropertyValue('--angle');
  const motionInt = setInterval(rotate, 10);
  function rotate() {
    const angle = +avatar.style.getPropertyValue('--angle') || +initialAngle;
    avatar.style.setProperty('--angle', `${angle + 1}`);
  }
  avatar.onmouseout = function() {
    clearInterval(motionInt);
  }
}