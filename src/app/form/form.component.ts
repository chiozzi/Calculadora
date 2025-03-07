

//importação do "Component" do Angular
import { Component } from '@angular/core';

//definição do Decorator "@Component"
@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

//definição da Classe "FormComponent"
//export permite que essa classe seja utilizada em outros arquivos do projeto.
export class FormComponent {
//declaração de variáveis
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

//Somar
    onClickSomar(){
      this.resultado = this.num1 + this.num2;
    }


      // Subtrair
  onClickSubtrair() {
    this.resultado = this.num1 - this.num2;
  }

  // Multiplicar
  onClickMultiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  // Dividir
  onClickDividir() {
      this.resultado = this.num1 / this.num2;
  }

  // Potenciação
  onClickPotenciar() {
    this.resultado = Math.pow(this.num1, this.num2);
  }

  // Média
  onClickMediar() {
    this.resultado = (this.num1 + this.num2) / 2;
  }
}

