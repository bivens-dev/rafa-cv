/**
 * @tagname theme-toggle
 * 
 * @summary A button that allows the user to manually switch between light and dark mode themes
 *
 * @cssproperty --theme-button-icon-color - Controls the color of icon
 * @cssproperty --theme-toggle-background-color - Controls the color of the button
 * @cssproperty --theme-toggle-border-color - Controls the color of the button border
 * @cssproperty --theme-toggle-hover-color - Controls the color of the button when someone hovers over it
 *
 * @property {string} currentSetting - the current theme value (dark or light)
 * @property {HTMLButtonElement} themeButton - the actual button users will click
 */
export class ThemeToggle extends HTMLElement {

  // Make a ShadowDOM and assign it to public state (Web Component Specific code)
  shadowRoot = this.attachShadow({ mode: "open" });

  // the current theme value (dark or light)
  #currentSetting;

  // the actual button users will click
  #themeButton;

  constructor(){
    // Important to remember that the when making a Web Component the first thing we need to
    // put in the constructor function is a call to super() so everything is set up properly.
    super();
  }

  // What do we want to do when the tag is added to the page
  connectedCallback() {
    // Put the code on the page but keep it self-contained so our CSS is easy to write
    this.shadowRoot.innerHTML = this.#render();
    // Figure out what the current setting should be before anyone clicks the button
    this.#currentSetting = this.#calculateCurrentSetting();
    // Find the button that users will click and store it so we can use it later
    this.#themeButton = this.shadowRoot.querySelector('#dark-mode-button');
    // 
    this.#themeButton.addEventListener('click', e => this.#toggleDarkMode());
  }

  // What code do we want to run when the component is no longer on the page
  disconnectedCallback() {
    this.#themeButton.removeEventListener('click', e => this.#toggleDarkMode());
  }

  /**
   * Run a series of checks to determine if the page is in dark mode or not
   * @return {string} the current theme value (dark or light)
   */
  #render(){
    // We could have put all of our code in here but it's easier to manage 
    // when we split it up like this so we can focus on one thing at a time.
    return this.#renderStyles() + this.#renderButton();
  }

  /** 
   * Component styles
   * @return {string} the CSS code we use to style our component
   */
  #renderStyles(){
    return `
    <style>
      :host {
        --theme-button-icon-color;
        --theme-toggle-background-color;
        --theme-toggle-border-color;
      }

      #dark-mode-button {
        color: var(--theme-toggle-icon-color, black);
        background-color: var(--theme-toggle-background-color, transparent);
        border-radius: 3px;
        padding: 0.2rem 0.5rem;
        border: 1px solid var(--theme-toggle-border-color, var(--outline-color));
      }

      #dark-mode-button:hover {
        background-color: var(--theme-toggle-hover-color, rgba(255,255,255, 0.2));
      }
    </style>
    `;
  }

  /** 
   * HTML code for our component
   * @return {string} the HTML code for our button
   */
  #renderButton(){
    return `
    <button id="dark-mode-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path fill="currentColor" d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"/>
      </svg>
    </button>
    `;
  }

  /** 
   * Run a series of checks to determine if the page is in dark mode or not
   * @return {string} the current theme value (dark or light)
   */
  #calculateCurrentSetting(){
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
  #toggleDarkMode(){
    if (this.#currentSetting === 'light') {
      this.#currentSetting = 'dark';
    } else {
      this.#currentSetting = 'light';
    }

    document.body.dataset.theme = this.#currentSetting;
  }
}