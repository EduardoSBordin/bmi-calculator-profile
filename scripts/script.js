const showInfNumber = document.querySelector('p');
const showInfText = document.querySelector('h2')

const getHeight = document.querySelector('#getHeight');
const getWeight = document.querySelector('#getWeight');

const btnRes = document.querySelector('#btnRes');
const btnReload = document.querySelector('#btnReload');

const divInf = document.querySelector('#inf');

function calcBMI(){

    if(getHeight.value.length === 0 || getWeight.value.length === 0){

        alert('Error');
    }else{

        let res = Number(getWeight.value / (getHeight.value * getHeight.value));
        let res2 = res.toFixed(2);
        showInfNumber.innerText = res2;

        if(res2 < 18.5 ){

            showInfText.innerText = 'Abaixo do peso.';
            divInf.style.background = '#fcbd16';
            divInf.style.color = 'whitesmoke';

        }else if(res2 >= 18.5 && res2 <= 24.9){

            showInfText.innerText = 'Peso ideal.';
            divInf.style.background = '#80bf66';
            divInf.style.color = 'whitesmoke';

        }else if(res2 >= 25.0 && res2 <= 29.9){

            showInfText.innerText = 'Acima do peso.';
            divInf.style.background = '#f18815';
            divInf.style.color = 'whitesmoke';

        }else if(res2 >= 30.0 && res2 <= 34.9){

            showInfText.innerText = 'Obesidade grau I.';
            divInf.style.background = '#e52812';
            divInf.style.color = 'whitesmoke';

        }else if(res2 >= 35.0 && res2 <= 39.9){

            showInfText.innerText = 'Obesidade grau II (severa).';
            divInf.style.background = '#b21d17';
            divInf.style.color = 'whitesmoke';

        }else if(res2 > 40){

            showInfText.innerText = 'Obesidade grau III (mórbida).';
            divInf.style.background = '#801711';
            divInf.style.color = 'whitesmoke';
        }
    }

}

btnRes.addEventListener('click', () => {

    calcBMI();
})
btnReload.addEventListener('click', ()=> {

    showInfNumber.innerText = '0';
    showInfText.innerText = '';
    getHeight.value = '';
    getWeight.value = '';
    divInf.style.background = 'white';
    divInf.style.color = 'rgb(190, 190, 190)';
})


