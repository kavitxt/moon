const { ipcRenderer, webFrame } = require("electron");

ipcRenderer.invoke("MOON_BUNDLE_FETCH").then((bundle) => {
  webFrame.executeJavaScript(bundle);
});

const originalPreload = ipcRenderer.sendSync("MOON_ORIGINAL_PRELOAD");
if (originalPreload) require(originalPreload);
