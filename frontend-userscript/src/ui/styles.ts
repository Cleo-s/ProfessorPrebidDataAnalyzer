const PREBID_ANALYZER_CSS = `

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


let style: HTMLStyleElement;

function isStyleHere(): HTMLStyleElement {
    style = document.getElementById('prebid-analyzer-styles') as HTMLStyleElement;

    if (!style) {
        style = document.createElement('style') as HTMLStyleElement;
        style.id = 'prebid-analyzer-styles';
        document.head.appendChild(style);
    }

    return style;
}

export function injectStyles() {
    const styleEl: HTMLStyleElement = isStyleHere();

    if (!styleEl.textContent)
        styleEl.textContent = PREBID_ANALYZER_CSS; 
}
