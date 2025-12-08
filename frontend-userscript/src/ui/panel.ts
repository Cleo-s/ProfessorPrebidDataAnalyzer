import { injectStyles } from './styles';
import { prebidDataCollector } from '../dom/prebid-reader';
import { ids } from '../data/ids';

export function initPanel(): HTMLElement {
    injectStyles();

    const isBtnPresent = document.getElementById(ids.prebidAnalyzerButton) as HTMLButtonElement;
    const isDivPresent = document.getElementById(ids.prebidAnalyzerDiv) as HTMLDialogElement;
    const isResponseDivPresent = document.getElementById(ids.prebidAnalyzerResponsiveDiv) as HTMLDivElement;

    const mainDiv = document.createElement('div') as HTMLDivElement;
    const responseInfo = document.createElement('div') as HTMLDivElement;
    const analyzeBtn = document.createElement('button') as HTMLButtonElement;

    if (!isDivPresent) {
        mainDiv.classList.add(ids.prebidAnalyzerDiv);
        document.body.appendChild(mainDiv);
    } 
    
    if (!isBtnPresent) { 
        analyzeBtn.textContent = 'Провести Аналіз Данних';
        analyzeBtn.classList.add(ids.prebidAnalyzerButton);
        analyzeBtn.addEventListener('click', () => {
            console.log('Button exists!');
            responseInfo.textContent = 'Collecting Prebid Data...';

            const snapShot = prebidDataCollector();
            responseInfo.textContent = JSON.stringify(snapShot);
        });

        mainDiv.appendChild(analyzeBtn);
    } 
    
    if (!isResponseDivPresent) {
        responseInfo.classList.add(ids.prebidAnalyzerResponsiveDiv);
        
        responseInfo.textContent = 'Waiting for Analysys'

        mainDiv.appendChild(responseInfo);
    }

    return mainDiv;
}