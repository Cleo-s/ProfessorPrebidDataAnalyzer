import { injectStyles } from './styles';

function initPanel(): string {
    injectStyles();

    const isBtnPresent = document.getElementById('prebid-analyzer-button') as HTMLButtonElement;
    const isDivPresent = document.getElementById('prebid-analyzer-div') as HTMLDialogElement;
    const isSectionPresent = document.getElementById('prebid-analyzer-section') as HTMLTableSectionElement;
    const isResponseDivPresent = document.getElementById('prebid-analyzer-response-div') as HTMLDivElement;

    const mainDiv = document.createElement('div') as HTMLDivElement;
    const panelSection = document.createElement('section') as HTMLTableSectionElement;
    const responseInfo = document.createElement('div') as HTMLDivElement;
    
    if (!isDivPresent) {
        mainDiv.classList.add('prebid-analyzer-div');
        document.body.appendChild(mainDiv);
    }

    if (!isSectionPresent) {
        panelSection.classList.add('prebid-analyzer-section');
        mainDiv.appendChild(panelSection);
    }
    
    if (!isBtnPresent) { 
        const analyzeBtn = document.createElement('button') as HTMLButtonElement;
    
        analyzeBtn.textContent = 'Провести Аналіз Данних';
        analyzeBtn.classList.add('prebid-analyzer-button');
        analyzeBtn.addEventListener('click', () => {
            console.log('Button exists!');
        });

        panelSection.appendChild(analyzeBtn);
    }

    if (!isResponseDivPresent) {
        responseInfo.classList.add('prebid-analyzer-response-div');
        panelSection.appendChild(responseInfo);
    }


}