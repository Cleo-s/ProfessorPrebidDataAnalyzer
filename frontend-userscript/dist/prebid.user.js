"use strict";
(() => {
  // src/ui/styles.ts
  var PREBID_ANALYZER_CSS = `

.prebid-analyzer-div {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 25px;
    top: 25px;

    border: 1px solid transparent;
    border-radius: 2px;

    background-color: rgba(255, 255, 255, 0.6);

    height: 500px;
    width: 500px;

    z-index: 999;

    overflow: auto;

    gap: 24px;
}

.prebid-analyzer-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 2px;

    z-index: 999;

    padding: 2px 4px;
    cursor: pointer;

    background-color: rgba(25, 31, 52, 0.8);
}

.prebid-analyzer-button:hover {
    background-color: rgba(25, 31, 52, 0.4);
}

.prebid-analyzer-response-div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 400px;
    width: 400px;

    z-index: 999;
}

`;
  var style;
  function isStyleHere() {
    style = document.getElementById("prebid-analyzer-styles");
    if (!style) {
      style = document.createElement("style");
      style.id = "prebid-analyzer-styles";
      document.head.appendChild(style);
    }
    return style;
  }
  function injectStyles() {
    const styleEl = isStyleHere();
    if (!styleEl.textContent)
      styleEl.textContent = PREBID_ANALYZER_CSS;
  }

  // src/ui/panel.ts
  function initPanel() {
    injectStyles();
    const isBtnPresent = document.getElementById("prebid-analyzer-button");
    const isDivPresent = document.getElementById("prebid-analyzer-div");
    const isResponseDivPresent = document.getElementById("prebid-analyzer-response-div");
    const mainDiv = document.createElement("div");
    const responseInfo = document.createElement("div");
    const analyzeBtn = document.createElement("button");
    if (!isDivPresent) {
      mainDiv.classList.add("prebid-analyzer-div");
      document.body.appendChild(mainDiv);
    }
    if (!isBtnPresent) {
      analyzeBtn.textContent = "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0410\u043D\u0430\u043B\u0456\u0437 \u0414\u0430\u043D\u043D\u0438\u0445";
      analyzeBtn.classList.add("prebid-analyzer-button");
      analyzeBtn.addEventListener("click", () => {
        console.log("Button exists!");
        responseInfo.textContent = "Analyzing...";
      });
      mainDiv.appendChild(analyzeBtn);
    }
    if (!isResponseDivPresent) {
      responseInfo.classList.add("prebid-analyzer-response-div");
      responseInfo.textContent = "Waiting for Analysys";
      mainDiv.appendChild(responseInfo);
    }
    return mainDiv;
  }

  // src/index.ts
  function test() {
    return "[Prebid Analyzer] userscript loaded";
  }
  initPanel();
  console.log(test());
})();
