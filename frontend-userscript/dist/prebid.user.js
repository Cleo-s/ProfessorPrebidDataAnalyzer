"use strict";
(() => {
  // src/dom/find-prebid-data.ts
  function getAllDataFromPBJSInstance() {
    try {
      let globalDataArray = [];
      let allPbjsEntries = [];
      let allVmPbjsEntries = [];
      let bidderTimeoutArray = [];
      let bidderErrorArray = [];
      let noBidArray = [];
      let bidderTimeToRespondArray = [];
      let timeOutArray = [];
      let adRenderDelayArray = [];
      let wichBidWonArray = [];
      let howMuchCpmArray = [];
      let whoLostArray = [];
      let creativeSizesArray = [];
      let biddersSizesArray = [];
      let auctionTimeOutArray = [];
      let isGDPRPresentArray = [];
      let addUnitsArray = [];
      let adsFormatsArray = [];
      let noBidObj = {};
      let bidTimeOutObj = {};
      let bidderErrorObj = {};
      let bidderTimeToRespond = {};
      let renderDelay = {};
      let auctionTimeOut = {};
      let wonBids = {};
      let siteRequestedSizes = {};
      let bidderSizes = {};
      allPbjsEntries = unsafeWindow.vmpbjs.getEvents();
      allPbjsEntries.forEach((e) => {
        console.log(e);
        if (e.eventType === "bidTimeout") {
          bidderTimeoutArray.push(bidTimeOutObj = {
            bidder: e.args.bidder,
            adUnitCode: e.args.adUnitCode,
            auctionID: e.args.auctionID
          });
        }
        ;
        if (e.eventType === "bidderError") {
          bidderErrorArray.push(bidderErrorObj = {
            error: e.args.error,
            bidderCode: e.args.bidderRequest.bidderCode,
            adUnits: e.args.bidderRequest.adUnits,
            bids: e.args.bidderRequest.bids
          });
        }
        ;
        if (e.eventType === "noBid") {
          noBidArray.push(noBidObj = {
            isNoBid: true,
            bidder: e.args.bidder,
            adUnitCode: e.args.adUnitCode,
            auctionID: e.args.auctionID
          });
        }
        ;
        if (e.eventType === "bidResponse") {
          bidderTimeToRespondArray.push(bidderTimeToRespond = {
            timeToRespond: e.args.timeToRespond,
            requestTimes: e.args.requestTimestamp,
            responseTimes: e.args.responseTimestamp
          });
        }
        ;
        if (e.eventType === "auctionInit") {
          timeOutArray.push(auctionTimeOut = {
            bidder: e.args.bidder,
            adUnitCode: e.args.adUnitCode,
            auctionID: e.args.auctionId,
            timeout: e.args.timeout
          });
        }
        ;
        if (e.eventType === "bidWon") {
          wichBidWonArray.push(wonBids = {
            wonBid: e.args,
            wonBidAdUnitCode: e.args.bidder,
            wonBidder: e.args.adUnitCode
          });
          howMuchCpmArray.push(wonBids = {
            CPM: e.args.cpm,
            currency: e.args.currency
          });
        }
        ;
        if (e.eventType === "bidResponse") {
          biddersSizesArray.push(bidderSizes = {
            width: e.args.width,
            height: e.args.height
          });
        }
        ;
      });
      globalDataArray = [
        bidderTimeoutArray,
        bidderErrorArray,
        noBidArray,
        bidderTimeToRespondArray,
        timeOutArray,
        wichBidWonArray,
        howMuchCpmArray,
        creativeSizesArray,
        biddersSizesArray
      ];
      return globalDataArray;
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  // src/dom/prebid-reader.ts
  function prebidDataCollector() {
    const prebidLogs = { text: "" };
    const allPrebidData = getAllDataFromPBJSInstance();
    const metaData = {
      url: window.location.href,
      collectedAt: (/* @__PURE__ */ new Date()).toISOString(),
      userAgent: navigator.userAgent
    };
    const prebidData = { meta: metaData, logs: [prebidLogs], globalData: allPrebidData };
    return prebidData;
  }

  // src/ui/styles.ts
  var PREBID_ANALYZER_CSS = `

.prebid-analyzer-div {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    bottom: 25px;
    left: 25px;

    border: 1px solid transparent;
    border-radius: 2px;

    background-color: rgba(255, 255, 255, 0.95);

    height: 900px;
    width: 650px;

    z-index: 9999;
}

.prebid-closed-div {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 25px;
    left: 25px;

    border: 1px solid transparent;
    border-radius: 2px;

    z-index: 9999;

    background-color: rgba(255, 255, 255, 0.95);

    height: 25px;
    width: 650px;
}

.prebid-analyzer-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 2px;

    z-index: 9999;

    padding: 8px 16px;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-size: 24px;

    background-color: rgba(200, 200, 200, 0.8);
}

.prebid-analyzer-button:hover {
    background-color: rgba(180, 180, 180, 0.4);
}

.prebid-analyzer-response-div {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;

    white-space: pre-line;
    overflow-y: auto;

    font-family: 'Inter', sans-serif;
    font-size: 16px;

    height: 550px;
    width: 600px;

    z-index: 9999;
    padding: 12px 2px 4px 2px;
}

.prebid-close-main-div-button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    left: 250px;

    border: 1px solid black;
    border-radius: 2px;

    z-index: 9999;

    padding: 4px 8px;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-size: 12px;

    background-color: rgba(200, 200, 200, 0.8);
}

.prebid-close-main-div-button:hover {
    background-color: rgba(180, 180, 180, 0.4);
}

.prebid-open-main-div-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 2px;

    z-index: 9999;

    padding: 4px 8px;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-size: 12px;

    background-color: rgba(200, 200, 200, 0.8);
}

.prebid-open-main-div-button:hover {
    background-color: rgba(180, 180, 180, 0.4);
}
`;

  // src/api/config.ts
  var API_BASE_URL = "https://prebid-analyzer.duckdns.org";
  var PREBID_ANALYZER_PATH = "/api/prebid/analyze";

  // src/api/client.ts
  async function analyzePrebid(pSnap) {
    const url = API_BASE_URL + PREBID_ANALYZER_PATH;
    const reqestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pSnap)
    };
    try {
      const response = await fetch(url, reqestOptions);
      if (!response.ok)
        throw new Error(`Response status: ${response.status}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // src/data/ids.ts
  var ids = {
    prebidAnalyzerButton: "prebid-analyzer-button",
    prebidAnalyzerDiv: "prebid-analyzer-div",
    prebidAnalyzerResponsiveDiv: "prebid-analyzer-response-div",
    prebidCloseMainDivButton: "prebid-close-main-div-button",
    prebidClosedDiv: "prebid-closed-div",
    prebidOpenMainDivButton: "prebid-open-main-div-button"
  };

  // src/ui/panel.ts
  function initPanel() {
    const isBtnPresent = document.getElementById(ids.prebidAnalyzerButton);
    const isDivPresent = document.getElementById(ids.prebidAnalyzerDiv);
    const isResponseDivPresent = document.getElementById(ids.prebidAnalyzerResponsiveDiv);
    const mainDiv = document.createElement("div");
    const responseInfo = document.createElement("div");
    const analyzeBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    const closedDiv = document.createElement("div");
    const openBtn = document.createElement("button");
    const styleEl = document.createElement("style");
    styleEl.id = "prebid-analyzer-styles";
    styleEl.textContent = PREBID_ANALYZER_CSS;
    document.head.appendChild(styleEl);
    if (!isDivPresent) {
      mainDiv.classList.add(ids.prebidAnalyzerDiv);
      document.body.appendChild(mainDiv);
    }
    ;
    closeBtn.classList.add(ids.prebidCloseMainDivButton);
    closeBtn.innerHTML = "Collapse Window";
    mainDiv.appendChild(closeBtn);
    closedDiv.classList.add(ids.prebidClosedDiv);
    closeBtn.addEventListener("click", () => {
      mainDiv.style.display = "none";
      closedDiv.style.display = "flex";
      closedDiv.appendChild(openBtn);
      openBtn.innerHTML = "Open Window";
      openBtn.classList.add(ids.prebidOpenMainDivButton);
      document.body.appendChild(closedDiv);
    });
    openBtn.addEventListener("click", () => {
      mainDiv.style.display = "flex";
      closedDiv.style.display = "none";
    });
    if (!isResponseDivPresent) {
      responseInfo.classList.add(ids.prebidAnalyzerResponsiveDiv);
      responseInfo.textContent = "Waiting for Analysys";
      mainDiv.appendChild(responseInfo);
    }
    if (!isBtnPresent) {
      analyzeBtn.textContent = "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0410\u043D\u0430\u043B\u0456\u0437 \u0414\u0430\u043D\u0438\u0445";
      analyzeBtn.classList.add(ids.prebidAnalyzerButton);
      analyzeBtn.addEventListener("click", async (e) => {
        responseInfo.textContent = "Collecting Prebid Data...";
        const snapShot = prebidDataCollector();
        responseInfo.textContent = "Sending Data to backend analyzer...";
        try {
          const response = await analyzePrebid(snapShot);
          responseInfo.textContent = "";
          responseInfo.textContent = response.fullRes;
        } catch (error) {
          console.error("Error during analysis. Check backend or network", error);
        }
      });
      mainDiv.appendChild(analyzeBtn);
    }
    return mainDiv;
  }

  // src/index.ts
  initPanel();
})();
