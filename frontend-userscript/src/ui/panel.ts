import { injectStyles } from './styles';
import { prebidDataCollector } from '../dom/prebid-reader';
import { analyzePrebid} from '../api/client';
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
    
    
    if (!isResponseDivPresent) {
        responseInfo.classList.add(ids.prebidAnalyzerResponsiveDiv);
        
        responseInfo.textContent = 'Waiting for Analysys'
        
        mainDiv.appendChild(responseInfo);
    }

    if (!isBtnPresent) { 
    analyzeBtn.textContent = 'Провести Аналіз Данних';
        analyzeBtn.classList.add(ids.prebidAnalyzerButton);
        analyzeBtn.addEventListener('click', async (e) => {
            responseInfo.textContent = 'Collecting Prebid Data...';

            const snapShot = prebidDataCollector();
            responseInfo.textContent = 'Sending Data to backend analyzer...';

            try {
                const response = await analyzePrebid(snapShot);
                
                responseInfo.style.fontSize = '14px';
                responseInfo.textContent = '';
                responseInfo.textContent = response.fullRes;

                console.log(response);
                
            } catch (error) {
                console.error('Error during analysis. Check backend or network', error);
            }
        });

        mainDiv.appendChild(analyzeBtn);
    } 

    return mainDiv;
}