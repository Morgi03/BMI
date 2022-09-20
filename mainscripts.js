function kattintas(){
  startbutton();
      let magassaga = parseFloat(document.getElementById('magassag').value);
      let sulya = parseFloat(document.getElementById('suly').value);
      let bmi = sulya / ((magassaga/100)*(magassaga/100));
      bmi = Math.round(bmi * 100) / 100;
    document.getElementById('bmi_ertek').innerHTML = bmi;

  if(bmi <= 18.5){
    document.getElementById('Sovany').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('Sovany').style.color = 'rgb(255 255 255)';
  }
  else if(bmi >= 18.6 && bmi <= 24.9){
    document.getElementById('Normal').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('Normal').style.color = 'rgb(255 255 255)';
  }
  else if(bmi >= 25 && bmi <= 29.9){
    document.getElementById('Tulsuly').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('Tulsuly').style.color = 'rgb(255 255 255)';
  }
  else if(bmi >= 30 && bmi <= 34.9){
    document.getElementById('I_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('I_FokuElhizas').style.color = 'rgb(255 255 255)';
  }
  else if(bmi >= 35 && bmi <= 39.9){
    document.getElementById('II_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('II_FokuElhizas').style.color = 'rgb(255 255 255)';
  }
  else if(bmi >= 40){
    document.getElementById('III_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('III_FokuElhizas').style.color = 'rgb(255 255 255)';
  }
}
function startbutton(){
  document.getElementById('Sovany').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('Sovany').style.color = 'rgb(0 0 0)';
  document.getElementById('Normal').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('Normal').style.color = 'rgb(0 0 0)';
  document.getElementById('Tulsuly').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('Tulsuly').style.color = 'rgb(0 0 0)';
  document.getElementById('I_FokuElhizas').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('I_FokuElhizas').style.color = 'rgb(0 0 0)';
  document.getElementById('II_FokuElhizas').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('II_FokuElhizas').style.color = 'rgb(0 0 0)';
  document.getElementById('III_FokuElhizas').style.backgroundColor = 'rgb(255 255 255)';
    document.getElementById('III_FokuElhizas').style.color = 'rgb(0 0 0)';
}

function init(){
    document.getElementById('szamol').addEventListener('click',kattintas);
}
document.addEventListener('DOMContentLoaded', init);