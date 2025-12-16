export const PREBID_ANALYZER_CSS = `

.prebid-analyzer-div {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 25px;
    left: 25px;

    border: 1px solid transparent;
    border-radius: 2px;

    background-color: rgba(255, 255, 255, 0.95);

    height: 750px;
    width: 650px;

    z-index: 999;
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

    z-index: 999;

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

    z-index: 999;

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
    font-size: 24px;

    height: 650px;
    width: 550px;

    z-index: 999;
}

.prebid-close-main-div-button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    left: 250px;

    border: 1px solid black;
    border-radius: 2px;

    z-index: 999;

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

    z-index: 999;

    padding: 4px 8px;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-size: 12px;

    background-color: rgba(200, 200, 200, 0.8);
}

.prebid-open-main-div-button:hover {
    background-color: rgba(180, 180, 180, 0.4);
}
`
