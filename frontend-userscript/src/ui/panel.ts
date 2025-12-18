import { prebidDataCollector } from '../dom/prebid-reader';
import { PREBID_ANALYZER_CSS } from './styles';
import { analyzePrebid} from '../api/client';
import { ids } from '../data/ids';

export function initPanel(): HTMLElement {
    //injectStyles();

    const isBtnPresent = document.getElementById(ids.prebidAnalyzerButton) as HTMLButtonElement;
    const isDivPresent = document.getElementById(ids.prebidAnalyzerDiv) as HTMLDialogElement;
    const isResponseDivPresent = document.getElementById(ids.prebidAnalyzerResponsiveDiv) as HTMLDivElement;

    const mainDiv = document.createElement('div') as HTMLDivElement;
    const responseInfo = document.createElement('div') as HTMLDivElement;
    const analyzeBtn = document.createElement('button') as HTMLButtonElement;
    const closeBtn = document.createElement('button') as HTMLButtonElement;
    const closedDiv = document.createElement('div') as HTMLDivElement;
    const openBtn = document.createElement('button') as HTMLButtonElement;

    const styleEl = document.createElement('style');
    styleEl.id = 'prebid-analyzer-styles';
    styleEl.textContent = PREBID_ANALYZER_CSS;
    document.head.appendChild(styleEl);
    
    if (!isDivPresent) {
        mainDiv.classList.add(ids.prebidAnalyzerDiv);
        document.body.appendChild(mainDiv);
    };
    
    closeBtn.classList.add(ids.prebidCloseMainDivButton);
    closeBtn.innerHTML = 'Collapse Window';   
    mainDiv.appendChild(closeBtn);
    
    closedDiv.classList.add(ids.prebidClosedDiv);
    
    closeBtn.addEventListener('click',() => {
        mainDiv.style.display = 'none';
        closedDiv.style.display = 'flex';
        
        closedDiv.appendChild(openBtn);
        
        openBtn.innerHTML = 'Open Window';
        openBtn.classList.add(ids.prebidOpenMainDivButton)
        
        document.body.appendChild(closedDiv);
    });

    openBtn.addEventListener('click', () => {
        mainDiv.style.display = 'flex';
        closedDiv.style.display = 'none';
    })

    if (!isResponseDivPresent) {
        responseInfo.classList.add(ids.prebidAnalyzerResponsiveDiv);
        
        responseInfo.textContent = 'Waiting for Analysys'
        
        mainDiv.appendChild(responseInfo);
    }

    if (!isBtnPresent) { 
    analyzeBtn.textContent = 'Провести Аналіз Даних';
        analyzeBtn.classList.add(ids.prebidAnalyzerButton);
        analyzeBtn.addEventListener('click', async (e) => {
            responseInfo.textContent = 'Collecting Prebid Data...';

            const snapShot = prebidDataCollector();
            responseInfo.textContent = 'Sending Data to backend analyzer...';

            try {
                const response = await analyzePrebid(snapShot);
                
                responseInfo.textContent = '';

                responseInfo.textContent = response.fullRes

            } catch (error) {
                console.error('Error during analysis. Check backend or network', error);
            }
        });

        mainDiv.appendChild(analyzeBtn);
    } 

    return mainDiv;
}