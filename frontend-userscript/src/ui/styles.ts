const PREBID_ANALYZER_CSS = `
.prebid-analyzer-button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 2px;

    position: fixed;
    bottom: 100px;
    right: 150px;

    z-index: 999;

    padding: 2px 4px;
    cursor: pointer;

    background-color: rgba(25, 31, 52, 0.8);
}

.prebid-analyzer-button:hover {
    background-color: rgba(25, 31, 52, 0.4);
}

.prebid-analyzer-panel {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 250px;
    bottom: 200px;

    border: 1px solid transparent;
    border-radius: 2px;

    background-color: (255, 255, 255, 0.6);

    max-height: 500px;
    overflow: auto;

    gap: 24px;
}
`

let style: HTMLStyleElement;

function isStyleHere(): HTMLStyleElement {
    style = document.getElementById('prebid-analyzer-styles') as HTMLStyleElement;

    if (!style) {
        style = document.createElement('style');
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
