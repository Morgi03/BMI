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
    let newsuly1 = ((magassaga/100)*(magassaga/100))*18.5;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly1 * 100) / 100) +" és több";
  }
  else if(bmi >= 18.6 && bmi <= 24.9){
    document.getElementById('Normal').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('Normal').style.color = 'rgb(255 255 255)';
    let newsuly2 = ((magassaga/100)*(magassaga/100))*18.6;
    let newsuly3 = ((magassaga/100)*(magassaga/100))*24.9;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly2 * 100) / 100) +" - "+(Math.round(newsuly3 * 100) / 100);
  }
  else if(bmi >= 25 && bmi <= 29.9){
    document.getElementById('Tulsuly').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('Tulsuly').style.color = 'rgb(255 255 255)';
    let newsuly4 = ((magassaga/100)*(magassaga/100))*25;
    let newsuly5 = ((magassaga/100)*(magassaga/100))*29.9;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly4 * 100) / 100) +" - "+(Math.round(newsuly5 * 100) / 100);
  }
  else if(bmi >= 30 && bmi <= 34.9){
    document.getElementById('I_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('I_FokuElhizas').style.color = 'rgb(255 255 255)';
    let newsuly6 = ((magassaga/100)*(magassaga/100))*30;
    let newsuly7 = ((magassaga/100)*(magassaga/100))*34.9;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly6 * 100) / 100) +" - "+(Math.round(newsuly7 * 100) / 100);
  }
  else if(bmi >= 35 && bmi <= 39.9){
    document.getElementById('II_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('II_FokuElhizas').style.color = 'rgb(255 255 255)';
    let newsuly8 = ((magassaga/100)*(magassaga/100))*35;
    let newsuly9 = ((magassaga/100)*(magassaga/100))*39.9;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly8 * 100) / 100) +" - "+(Math.round(newsuly9 * 100) / 100);
  }
  else if(bmi >= 40){
    document.getElementById('III_FokuElhizas').style.backgroundColor = 'rgb(243 149 62)';
    document.getElementById('III_FokuElhizas').style.color = 'rgb(255 255 255)';
    let newsuly10 = ((magassaga/100)*(magassaga/100))*40;
    document.getElementById('kivanatosszelsoertek').innerHTML = (Math.round(newsuly10 * 100) / 100) +" és kevesebb";
  }

  let newsuly = ((magassaga/100)*(magassaga/100))*23;
  document.getElementById('idealistomeg').innerHTML = Math.round(newsuly * 100) / 100;

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