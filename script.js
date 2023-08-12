const turnOnOff = document.getElementById( 'turnOnOff');
const lamp = document.getElementById( 'lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()){
    lamp.src = './img/ligada.png'
    }
}

function lampOff(){
    if (!isLampBroken() ){
    lamp.src ='./img/desligada.png'
    }
}

function lampBroken(){
    lamp.src ='./img/quebrada.png'
}

function lampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
        turnOnOff.style.backgroundColor = 'red';
    }else{
        lampOff();
        turnOnOff.textContent ='Ligar';
        turnOnOff.style.backgroundColor = 'green';
    }
}


turnOnOff.addEventListener ( 'click', lampOnOff);

lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
