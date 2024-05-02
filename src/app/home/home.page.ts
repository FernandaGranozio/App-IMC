import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
Peso=0;
altura=0;
total=0;
condicao='';

onIonChange(ev: RangeCustomEvent){
  this.Peso= parseInt(ev.detail.value.toString());
}

IonAltura(ev: RangeCustomEvent){
  this.altura= parseInt(ev.detail.value.toString());
}

Imc(){
  this.total=this.Peso/((this.altura/100)*(this.altura/100))
}

FuncaoCondicao(){
  if (this.total<18.5) {
this.condicao ='abaixo do peso';
  } else {if (this.total>=18.5 && this.total<25) {
this.condicao ='com o peso normal';
  } else {if (this.total>=25 && this.total<30) {
this.condicao='com sobrepeso';
  } else {if (this.total>=30 && this.total<35) {
this.condicao='com obesidade de grau 1';
  } else {if (this.total>=35 && this.total<40) {
this.condicao='com obesidade de grau 2';
  } else {this.condicao='obesidade de grau 3';

  }

  }

  }

  }

  }
}

}
