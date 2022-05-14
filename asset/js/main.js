// BMI test
let bmi_form = document.getElementById('bmi-form');
let bmi_report = document.getElementById('bmi_result_div');
let bmi_hight_alert = document.getElementById('bmi_hight_alert');
let bmi_result = document.getElementById('bmi_result');
let doc_bmi = document.getElementById('doc_bmi');

// B.M.I function
function getbmi(weight, foot, inch){
    let getWeight = weight;
    let getHight = (((foot*12)+parseFloat(inch))*0.0254);
    let totalHight = Math.pow(getHight, 2)
    const result = (getWeight/totalHight).toString().substring(0, 5);
    return result;
}
function inner(to, text){
    document.getElementById(to).innerHTML = text;
}
function addClass(to, text){
    document.getElementById(to).classList.add(text)
}
function removeClass(to, text){
    document.getElementById(to).classList.remove(text)
}
// IF user hit
bmi_form.addEventListener('submit', function(e){
    e.preventDefault();
    let bmi_weight = document.getElementById('bmi_weight').value;
    let bmi_hight_foot = document.getElementById('bmi_hight_foot').value;
    let bmi_hight_inch = document.getElementById('bmi_hight_inch').value;

    // Final bmi
    let bmi = getbmi(bmi_weight, bmi_hight_foot, bmi_hight_inch);
    inner('bmi_result', bmi);
    
    // Bmi condition
    if(bmi < 18.5){
        inner('doc_bmi', 'Under weight');
        addClass('doc_bmi', 'txt-red');removeClass('doc_bmi', 'txt-green');removeClass('doc_bmi', 'txt-orng');removeClass('doc_bmi', 'hed');

    }else if(bmi > 18.5 && bmi < 24.9){
        inner('doc_bmi', 'Perfect');
        addClass('doc_bmi', 'txt-green');removeClass('doc_bmi', 'txt-orng');removeClass('doc_bmi', 'hed');

    }else if(bmi > 25 && bmi < 29.9){
        inner('doc_bmi', 'Over weight');
        addClass('doc_bmi', 'txt-orng');removeClass('doc_bmi', 'hed');
    }else if(bmi >= 31.1){
        inner('doc_bmi', 'Obsese');
        addClass('doc_bmi', 'txt-red');addClass('doc_bmi', 'hed');removeClass('doc_bmi', 'txt-green');removeClass('doc_bmi', 'txt-orng');
    }

    // BMI index
    bmi_report.style.display = 'block';
});
