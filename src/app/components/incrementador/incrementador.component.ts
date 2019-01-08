import { Component, OnInit,Input,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtprogress: ElementRef;

  //asi tmb se puede hacer, pero no es adecuado
	@Input ('nombre') leyenda:string='Leyenda';
  //es lo adecuado
	@Input () progreso: number=50;

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onChange(nuevoValor: number){

    let elemHTML: any = document.getElementsByName('progreso')[0];


    if (nuevoValor >= 100){
      this.progreso = 100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }

    //elemHTML.value = this.progreso;
    this.txtprogress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);

    
  }



  cambiarValor(valor:number){
  	if (this.progreso >=100 && valor > 0) {
  		this.progreso = 100;
  		return;
  	}
  	if (this.progreso <=0 && valor < 0) {
  		this.progreso = 0;
  		return;
  	}
  	this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    //para hacer focus en el input que estabamos utilizando...
    this.txtprogress.nativeElement.focus();
  }

}
