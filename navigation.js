const steps = ["step0", "step1", "step2", "step3", "step4", "step5", "step6", "step7"];

function goToNextStep(currentStep, totalSteps) {
    if (currentStep < totalSteps) {
        const nextStep = currentStep + 1;
        window.location.href = `step${nextStep}.html`;
    }
}

function goToPreviousStep(currentStep) {
    if (currentStep > 0) {
        const previousStep = currentStep - 1;
        window.location.href = `step${previousStep}.html`;
    }
}

function getCurrentStep() {
    const url = window.location.href;
    const match = url.match(/step(\d+)\.html/);
    if (match && match[1]) {
        return parseInt(match[1]);
    }
    return 0; 
}

document.querySelector('.next-button').addEventListener('click', function () {
    const currentStep = getCurrentStep();
    goToNextStep(currentStep, 7);
});

document.querySelector('.previous-button').addEventListener('click', function () {
    const currentStep = getCurrentStep();
    goToPreviousStep(currentStep);
});

