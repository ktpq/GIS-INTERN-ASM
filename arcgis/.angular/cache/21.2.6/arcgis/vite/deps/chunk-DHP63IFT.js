import {
  isServer,
  makeRuntime
} from "./chunk-K65EA25C.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@esri/calcite-components/dist/chunks/runtime.js
import "C:/Users/kiww/Desktop/cdg/arcgis/node_modules/@esri/calcite-components/dist/cdn/main.css";
var autoMode = "calcite-mode-auto";
var darkMode = "calcite-mode-dark";
var lightMode = "calcite-mode-light";
var CSS_UTILITY = {
  autoMode,
  darkMode,
  lightMode,
  rtl: "calcite--rtl",
  calciteAnimate: "calcite-animate",
  calciteAnimateInUp: "calcite-animate__in-up",
  calciteAnimateInDown: "calcite-animate__in-down",
  calciteAnimateInRight: "calcite-animate__in-right",
  calciteAnimateInLeft: "calcite-animate__in-left"
};
var DEBOUNCE = {
  filter: 250,
  nextTick: 0,
  resize: 150,
  reposition: 100
};
var resizeShiftStep = 25;
function initModeChangeEvent() {
  const { classList } = document.body;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getMode = () => classList.contains(darkMode) || classList.contains(autoMode) && prefersDark ? "dark" : "light";
  const emitModeChange = (mode) => document.body.dispatchEvent(new CustomEvent("calciteModeChange", { bubbles: true, detail: { mode } }));
  const modeChangeHandler = (newMode) => {
    if (currentMode !== newMode) {
      emitModeChange(newMode);
    }
    currentMode = newMode;
  };
  let currentMode = getMode();
  emitModeChange(currentMode);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => modeChangeHandler(event.matches ? "dark" : "light"));
  new MutationObserver(() => modeChangeHandler(getMode())).observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
}
var effectiveConfig = void 0;
var defaultConfig = {
  focusTrapStack: [],
  logLevel: "info"
};
function initConfig() {
  return __spreadValues(__spreadValues({}, defaultConfig), globalThis["calciteConfig"] ?? {});
}
function getConfig() {
  if (!effectiveConfig) {
    effectiveConfig = initConfig();
  }
  return effectiveConfig;
}
var version = "5.0.2";
var buildDate = "2026-02-18";
var revision = "960214b84";
function stampVersion() {
  const config = getConfig();
  if (config && config.version) {
    return;
  }
  console.info(`Using Calcite Components ${version} [Date: ${buildDate}, Revision: ${revision}]`);
  Object.defineProperty(config, "version", {
    value: version,
    writable: false
  });
  globalThis["calciteConfig"] = config;
}
if (!isServer) {
  if (document.readyState === "interactive") {
    initModeChangeEvent();
  } else {
    document.addEventListener("DOMContentLoaded", initModeChangeEvent, { once: true });
  }
}
if (true) {
  queueMicrotask(stampVersion);
}
var runtime = makeRuntime({ defaultAssetPath: "https://js.arcgis.com/calcite-components/5.0.2/", hydratedAttribute: "calcite-hydrated" });
var { customElement, getAssetPath, setAssetPath } = runtime;

export {
  CSS_UTILITY,
  DEBOUNCE,
  resizeShiftStep,
  getConfig,
  customElement,
  getAssetPath,
  setAssetPath
};
//# sourceMappingURL=chunk-DHP63IFT.js.map
