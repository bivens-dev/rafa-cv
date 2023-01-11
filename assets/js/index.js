import { ThemeToggle } from "./components/theme-toggle.js";

// Before we can use and Web Components we need to tell the browser
// what should the tag name be (must contain a hyphen) and which 
// JavaScript class should it associate with that tag name.
// Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
customElements.define('theme-toggle', ThemeToggle);