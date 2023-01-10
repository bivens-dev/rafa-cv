import { DarkModeController } from "./dark-mode-controller.js";

window.onload = (event) => {
  enableThemeSwitching();
};

function enableThemeSwitching() {
  const darkModeButton = document.getElementById('dark-mode-button');
  const darkModeController = new DarkModeController();
  darkModeButton.addEventListener('click', e => darkModeController.toggleDarkMode());
}