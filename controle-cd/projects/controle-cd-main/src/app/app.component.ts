import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Cd } from './model/cd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  cd!: Cd;
  cds!: Array<Cd>;
  title = 'Primeiro App';

  constructor(){

  }
  ngOnInit(): void {
    this.cd = new Cd("","",0,"",0);
  }
  onSubmit(){
    if(this.cd.artista!=""&&this.cd.album!=""){
      this.cds.push(this.cd);
      this.cd = new Cd("","",0,"",0);
    }
  }
  ngAfterViewInit(): void {

  }
}
