/** 
 * The DarkModeController class handles the logic responsible for 
 * manually switching between light and dark modes.
 */
export class DarkModeController {
  /**
   * The current theme value (light or dark)
   * @type {string}
   */
  currentSetting;

  constructor(){
    this.currentSetting = DarkModeController.#calculateCurrentSetting();
  }

  /** 
   * Run a series of checks to determine if the page is in dark mode or not
   * @return {string} the current theme value (dark or light)
   */
  static #calculateCurrentSetting(){
    // Start by checking if the body tag has a data-theme="dark" attribute
    if(document.body.dataset.theme === 'dark'){
      return 'dark';
    }

    // Next check if the body tag has a data-theme="light" attribute
    if(document.body.dataset.theme === 'light'){
      return 'light';
    }

    // Check if their browser is configured to prefer light mode
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    // If none of the above statements are true it must be the default value of dark
    return 'dark';
  }

  /** 
   * Change between light and dark theme modes by updating the theme custom attribute on the body.
   * 
   * Docs: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   */
  toggleDarkMode(){
    if (this.currentSetting === 'light') {
      this.currentSetting = 'dark';
    } else {
      this.currentSetting = 'light';
    }

    document.body.dataset.theme = this.currentSetting;
  }
}