import { injectStyles } from './styles';

export function initPanel(): HTMLElement {
    injectStyles();

    const isBtnPresent = document.getElementById('prebid-analyzer-button') as HTMLButtonElement;
    const isDivPresent = document.getElementById('prebid-analyzer-div') as HTMLDialogElement;
    const isResponseDivPresent = document.getElementById('prebid-analyzer-response-div') as HTMLDivElement;

    const mainDiv = document.createElement('div') as HTMLDivElement;
    const responseInfo = document.createElement('div') as HTMLDivElement;
    const analyzeBtn = document.createElement('button') as HTMLButtonElement;

    if (!isDivPresent) {
        mainDiv.classList.add('prebid-analyzer-div');
        document.body.appendChild(mainDiv);
    }
    
    if (!isBtnPresent) { 
    
        analyzeBtn.textContent = 'Провести Аналіз Данних';
        analyzeBtn.classList.add('prebid-analyzer-button');
        analyzeBtn.addEventListener('click', () => {
            console.log('Button exists!');
            responseInfo.textContent = 'Analyzing...';
        });

        mainDiv.appendChild(analyzeBtn);
    }

    if (!isResponseDivPresent) {
        responseInfo.classList.add('prebid-analyzer-response-div');
        
        responseInfo.textContent = 'Waiting for Analysys'

        mainDiv.appendChild(responseInfo);
    }

    return mainDiv;

}