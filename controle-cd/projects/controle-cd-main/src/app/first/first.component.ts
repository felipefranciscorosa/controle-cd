import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cd } from '../model/cd';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,AfterViewInit{
  cd!: Cd;
  cds!: Array<Cd>;
  title = 'Primeiro App';

  constructor(){

  }
  ngOnInit(): void {
    this.cds = [new Cd("Dois","Legião Urbana",1992,"Rock",21),new Cd("Acústico MTV","Capital Inicial",1997,"Rock",18)]
    this.cd = new Cd("","",0,"",0);
  }
  onSubmit(){

  }
  onSaveClick(){
    if(this.cd.artista!=""&&this.cd.album!=""){
      this.cds.push(this.cd);
      this.cd = new Cd("","",0,"",0);
    }
  }
  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

