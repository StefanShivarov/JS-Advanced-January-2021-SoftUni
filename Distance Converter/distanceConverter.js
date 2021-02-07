function attachEventsListeners(){

    let outputArea = document.getElementById('outputDistance');
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', onClick);

    function onClick(){
        let result = Number(document.getElementById('inputDistance').value);
        let selectedOptionInputValue = document.getElementById('inputUnits').value;
        switch(selectedOptionInputValue){

            case 'km': result*=1000; break;
            case 'm': result*= 1; break;
            case 'cm': result*= 0.01; break;
            case 'mm': result*= 0.001; break;
            case 'mi': result*= 1609.34; break;
            case 'yrd': result*= 0.9144; break;
            case 'ft': result*= 0.3048; break;
            case 'in': result*= 0.0254; break;
        }

        let selectedOptionOutputValue = document.getElementById('outputUnits').value;
        switch(selectedOptionOutputValue){

            case 'km': result/=1000; break;
            case 'm': result/= 1; break;
            case 'cm': result/= 0.01; break;
            case 'mm': result/= 0.001; break;
            case 'mi': result/= 1609.34; break;
            case 'yrd': result/= 0.9144; break;
            case 'ft': result/= 0.3048; break;
            case 'in': result/= 0.0254; break;
        }

        outputArea.value = result;
    }
}