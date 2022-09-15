import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Cd } from '../model/cd';
import { Constants } from '../util/constants';
import { NgForm } from '@angular/forms';
import { CdStorageService } from './first-storage.service';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';
import {CdPromisseService} from './../services/cd-promisse.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [CdStorageService,CdPromisseService],
})
export class FirstComponent implements OnInit,AfterViewInit{
  @ViewChild('form') form!: NgForm;

  cd!: Cd;
  cds!: Promise<Cd[]>;
  title = 'Primeiro App';

  constructor(private cdService: CdStorageService){

  }
  getCds(){
    return this.cdService.cds;
  }
  ngOnInit(): void {
    this.cd = new Cd(0,"","",0,"",0);
    this.cds = this.cdService.getCds();
  }
  onSubmit(){
    let clone = Cd.clone(this.cd);
    if (!this.cdService.isExist(this.cd.id)) {
      this.cdService.save(clone);
    } else {
      this.cdService.update(clone);
    }

    this.form.reset();
    this.cd = new Cd(0,"","",0,"",0);

  }
  onEdit(cd: Cd) {
    let clone = Cd.clone(cd);
    this.cd = clone;
  }
  onDelete(cd: Cd) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + cd.album
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.cdService.delete(cd);

  }
  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

